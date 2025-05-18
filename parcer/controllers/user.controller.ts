import { Request, Response } from "express";
import { User } from "../models/user.model";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { tokenAdress, compleatedDrops } = req.body;
    const user = new User({ tokenAdress, compleatedDrops });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: "Failed to create user" });
  }
};

export const getUsers = async (_req: Request, res: Response) => {
  const users = await User.find();
  res.json(users);
};
