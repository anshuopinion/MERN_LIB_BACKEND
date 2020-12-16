import { Schema, model, Document } from "mongoose";

export interface IRole extends Document {
  name: string;
}

const roleSchema: Schema = new Schema({
  name: { string: true },
});

export default model<IRole>("role", roleSchema);
