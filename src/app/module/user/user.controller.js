import userServices from "./user.services.js"

const signup = async (req,res,next)=>{
   try {
    const result = await userServices.signup(req.body)
    res.status(200).json({
        message:"User Created Successfully",
        success: true,
        data:result
    })
   } catch (error) {
    next(error)
   }
}


const  userController = {
    signup
}
export default userController;