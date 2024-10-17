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

const getallprduct = async(req,res,next)=>{
    try {
      const result = await productService.getall({})
      res.status(200).json({
        message:"successfully fetched",
        data:result,
        success:true
      })
    } catch (error) {
        next(error)
    }
}
const getdeleteone = async(req,res,next)=>{
    try {
        const result = await productService.delateone(req.params.id)
        res.status(200).json({
            message:"delete your product successfully",
            data:result,
            success:true,

        })
    } catch (error) {
        next(error)
        
    }
}
const productController = {
    addproduct,
    getproduct,
    getallprduct,
    getdeleteone
}
export default productController;