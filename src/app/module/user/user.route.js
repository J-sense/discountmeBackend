import express from "express"
import userController from "./user.controller.js"



const router = express.Router()
router.post("/users", userController.signup)
router.post("/users/login", userController.login)
const userRoutes = router;
export default userRoutes;