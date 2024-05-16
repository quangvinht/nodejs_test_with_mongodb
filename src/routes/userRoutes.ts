import { Router } from "express";
import {
  getUsers,
  searchByUsername,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController";

const userRouter = Router();

userRouter.get("/users", getUsers);
userRouter.get("/users/search/:username", searchByUsername);
userRouter.post("/users", createUser);
userRouter.patch("/users/:username", updateUser);
userRouter.delete("/users/:username", deleteUser);

export default userRouter;
