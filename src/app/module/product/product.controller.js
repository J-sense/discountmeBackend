import productService from "./product.services.js"

const addproduct = async (req,res,next) =>{
    try {
        const result = await productService.add(req.body)
        res.status(200).json({
            message:"Product Created Succesfully",
            success:true,
            data:result
        })
    } catch (error) {
       next(error) 
    }
}


const getproduct = async (req,res,next)=>{
    try {
    const result = await productService.get(req.params.id)
    res.status(200).json({
        message:"User retrive successfully",
        success:true,
        data:result
    })
    } catch (error) {
        next(error)
    }
}
const productController = {
    addproduct,
    getproduct
}
export default productController;