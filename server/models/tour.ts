import mongoose, { InferSchemaType } from 'mongoose';

const tourSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  name: { type: String },
  creator: { type: String },
  tags: [String],
  imageFile: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
  likeCount: { type: Number, default: 0 },
});

export type Tour = InferSchemaType<typeof tourSchema>;
export default mongoose.model('Tour', tourSchema);
