import { Request, Response } from "express";
import User, { IUser } from "../models/user";

// let users: User[] = [];

//GET: all user
export const getUsers = async (req: Request, res: Response): Promise<void> => {
  const users = await User.find({});
  res
    .status(200)
    .json({ status: 200, data: users, message: "Get all user success!" });
};

//GET: seach user by username
export const searchByUsername = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { username } = req.params;
  const userFilter = await User.find({
    username: { $regex: username, $options: "i" },
  });
  if (userFilter.length === 0) {
    res.status(404).json({ status: 404, message: "User not found" });
    return;
  }
  res
    .status(200)
    .json({ status: 200, data: userFilter, message: "Search user success!" });
};

//POST: create new user
export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const newUserInfo: IUser = req.body;
  const user = await User.findOne({ username: newUserInfo.username });
  if (user) {
    res.status(409).json({ status: 409, message: "User already exists !" });
    return;
  }
  const savedUser = await User.create(newUserInfo);
  await savedUser.save();

  res.status(201).json({
    status: 201,
    data: savedUser,
    message: "Create new user success!",
  });
};

//PATCH: update user
export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { username } = req.params;
  const userInfo: IUser = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    res.status(404).json({ status: 404, message: "User not found" });
    return;
  }
  const updatedUser = await User.findOneAndUpdate({ username }, userInfo, {
    new: true,
  });
  res
    .status(200)
    .json({ status: 200, data: updatedUser, message: "Update user success!" });
};

//DELETE: delete user
export const deleteUser = (req: Request, res: Response): void => {
  // const { username } = req.params;
  // const updatedUsers = users.filter((user: User) => user.username !== username);
  // const userDeleted = users.find((user: User) => user.username === username);
  // if (!userDeleted) {
  //   res.status(404).json({ status: 404, message: "User not found" });
  //   return;
  // }
  // users = updatedUsers;
  // res
  //   .status(200)
  //   .json({ status: 200, message: "Delete user success!", data: userDeleted });
};
