import mongoose, { InferSchemaType } from 'mongoose';

const tourSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  name: { type: String },
  _creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  creatorName: {  type: String, required: true },
  tags: [String],
  imageFile: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
  likeCount: { type: Number, default: 0 },
});

export type TourType = InferSchemaType<typeof tourSchema>;
export default mongoose.model('Tour', tourSchema);
