import { model, Schema } from "mongoose";


const ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
      
    },
    description: {
        type: String,
        required: true,
      
    }
    
}, {timestamps:true})
const Product = model("Product", ProductSchema)
export default Product