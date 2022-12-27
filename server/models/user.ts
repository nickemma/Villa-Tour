import mongoose, { InferSchemaType } from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export type User = InferSchemaType<typeof userSchema>;
export default mongoose.model('User', userSchema);
