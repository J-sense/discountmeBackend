import User from "./user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const signup = async (userData) => {
  try {
    const data = { ...userData };

    // Hash the password with bcrypt
    const hashPassword = await bcrypt.hash(data.password, 12);
    data.password = hashPassword;

    // Create a new user in the database
    const result = await User.create(data);

    return result;
  } catch (error) {
    console.error("Error during signup:", error);
    throw new Error("Signup failed");
  }
};

const login = async (userData) => {
  try {
    const isUserExist = await User.findOne({ email: userData.email });
    if (!isUserExist) {
      throw new Error("User not found");
    }

    const isPassword = await bcrypt.compare(userData.password, isUserExist.password);
    if (!isPassword) {
      throw new Error("Password incorrect");
    }

    // Create a token payload with necessary information
    const obj = {
      email: isUserExist.email,
      role: isUserExist.role,
    };

    // Use environment variable for secret
    const token = jwt.sign(obj, "resturant123", { expiresIn: '7d' });
    console.log(isUserExist)
    return {
      data: isUserExist,
      token: token,
    };
  } catch (error) {
    console.error("Error during login:", error);
    throw new Error("Login failed");
  }
};

const userServices = {
  signup,
  login,
};

export default userServices;
