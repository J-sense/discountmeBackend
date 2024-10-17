import express from "express"
// import userController from "./user.controller.js"
import productController from "./product.controller.js";



const router = express.Router()
router.post("/product", productController.addproduct)
router.get("/product/:id", productController.getproduct)
router.get("/product", productController.getallprduct)
router.delete("/product/:id", productController.getdeleteone)

const productRoutes = router;
export default productRoutes;