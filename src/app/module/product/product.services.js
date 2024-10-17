import Product from "./product.model.js"

const add = async(content)=>{
    const result = await Product.create(content)
    return result
}
const get = async (id) =>{
    const result = await Product.findById(id);
    return result;
}
const getall = async ()=>{
    const result = await Product.find()
    return result;
}
const delateone = async (id)=>{
    const result = await Product.findByIdAndUpdate(id)
    return result
}
const productService = {
    add,
    get,
    getall,
    delateone
}
export default productService;