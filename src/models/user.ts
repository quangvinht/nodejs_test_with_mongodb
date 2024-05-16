import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  username: string;
  fullname: string;
  role: string;
  project: string[];
  activeYn: string;
}

const userSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  fullname: { type: String, required: true },
  role: { type: String, required: true },
  project: { type: [String], required: true },
  activeYn: { type: String, required: true },
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
