import express from "express";
import userRoutes from "./app/module/user/user.route.js";
import productRoutes from "./app/module/product/product.route.js";
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.use(express.json());
app.use("/api",userRoutes);
app.use("/api",productRoutes)
export default app