import User from "./user.model.js"

const signup = async(userData) =>{
    const result = await User.create(userData);
    return result;
}




const userServices ={
    signup
}
export default userServices;