// types/user.types.ts
import { Document } from "mongoose";

export interface IUser extends Document {
  tokenAdress: string;
  compleatedDrops: string[];
}
