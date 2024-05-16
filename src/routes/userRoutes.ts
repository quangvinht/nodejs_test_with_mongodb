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
userRouter.get("/users/search", searchByUsername);
userRouter.post("/users", createUser);
userRouter.patch("/users", updateUser);
userRouter.delete("/users", deleteUser);

export default userRouter;
