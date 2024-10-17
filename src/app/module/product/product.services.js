import Product from "./product.model.js"

const add = async(content)=>{
    const result = await Product.create(content)
    return result
}
const get = async (id) =>{
    const result = await Product.findById(id);
    return result;
}
const productService = {
    add,
    get
}
export default productService;