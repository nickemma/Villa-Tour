import Tour from '../models/tour';
import User from '../models/user';
import mongoose from 'mongoose';

export const createTour = async (req: any, res: any) => {
  const tour = req.body;

  const creator = await User.findById(req.user);

  const newTour = new Tour({
    ...tour,
    creator: creator?.name,
    createdAt: new Date().toISOString(),
  });

  try {
    await newTour.save();
    res.status(201).json(newTour);
  } catch (err: any) {
    res.status(409).json({ message: err.message });
  }
};

export const getTours = async (req: any, res: any) => {
  try {
    const tours = await Tour.find();
    res.status(200).json(tours);
  } catch (err) {
    res.status(404).json({ message: 'Something went wrong' });
  }
};

export const getTour = async (req: any, res: any) => {
  const { id } = req.params;
  try {
    const tour = await Tour.findById(id);
    res.status(200).json(tour);
  } catch (err) {
    res.status(404).json({ message: 'Something went wrong' });
  }
};

export const getToursByUser = async (req: any, res: any) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ message: 'User does not exist' });
    }
    const userTours = await Tour.find({ creator: id });
    res.status(200).json(userTours);
  } catch (err) {
    res.status(404).json({ message: 'Something went wrong' });
  }
};
