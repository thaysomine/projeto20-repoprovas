import { Router } from "express";

import { signup, login } from "../controllers/userController.js";
import { validateSignup, validateLogin } from "../middlewares/joiValidation.js";

const userRouter = Router();

userRouter.post("/signup", validateSignup, signup);
userRouter.post("/login", validateLogin, login);

export default userRouter;