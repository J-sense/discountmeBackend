import User from "./user.model.js"
import bcrypt from "bcrypt"

const signup = async(userData) =>{
    const data = {...userData}
    console.log(data)
    const hashpassword = await bcrypt.hash(data.password, 12)
    data.password = hashpassword;
    const result = await User.create(data);
    return result;
}


const login = async (userData)=>{
   const isuserExist = await User.findOne({email:userData.email})
   if(!isuserExist){
    throw new Error("user not found")
   }
   const ispassword = await bcrypt(userData.password, isuserExist.password)
   if(!ispassword){
    throw new Error("password incorrect")
   }
   return isuserExist;
}




const userServices ={
    signup,
    login
}
export default userServices;