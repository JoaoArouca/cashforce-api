import { Router } from "express";
import UserController from "../../Http/Controller/User.controller";
import UserService from "../../Http/Service/User.service";

const userRouter = Router();

const service = new UserService();
const User = new UserController(service);

userRouter.get("/", (req, res) => User.getAllUsers(req, res));
userRouter.get("/:id", (req, res) => User.getUserById(req, res));

export default userRouter;
