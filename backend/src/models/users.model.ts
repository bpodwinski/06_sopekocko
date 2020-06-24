import * as mongoose from "mongoose";
import { Document, Schema } from "mongoose";
import * as uniqueValidator from "mongoose-unique-validator";

export interface IUser extends Document {
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

UserSchema.plugin(uniqueValidator);

export default mongoose.model<IUser>("Users", UserSchema);
