import { Router } from "express";
import userController from "../controller/userController.js";
const userRouter = Router();


userRouter.post("/login", (request, response) => {
  userController.login(request, response);
});

userRouter.post("/register", (request, response) => {
  userController.register(request, response);
});


export default userRouter;
