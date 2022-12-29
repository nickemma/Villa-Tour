import Tour, { TourType } from '../models/tour';
import User from '../models/user';
import mongoose from 'mongoose';

export const createTour = async (req: any, res: any) => {
  const tour = req.body;
  const creator = await User.findById(req.user);

  try {
    const newTour = await Tour.create({
      ...tour,
      _creator: creator,
      creatorName: creator?.name,
      createdAt: new Date().toISOString(),
    });

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
  const id = req.user;
  const userExists = await User.findById(id);

  try {
    if (!userExists) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    const userTours = await Tour.find({ _creator: id });
    res.status(200).json(userTours);
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong' });
  }
};

export const deleteTour = async (req: any, res: any) => {
  const { id } = req.params;

  try {
    const tour = await Tour.findById(id);
    await tour?.delete();
    res
      .status(200)
      .json({
        message: `Tour: ${tour?.name} deleted successfully`,
        id: tour?.id,
      });
  } catch (err) {
    res.status(404).json({ message: 'Something went wrong' });
  }
};

export const updateTour = async (req: any, res: any) => {
  const { id } = req.params;
  const { title, description, creator, imageFile, tags } = req.body;

  try {
    const tour = await Tour.findById(id);
    if (!tour) {
      return res.status(404).json({ message: 'Tour does not exist' });
    }
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      { title, description, creator, imageFile, tags },
      { new: true }
    );
    res.status(200).json(updatedTour);
  } catch (err) {
    res.status(404).json({ message: 'Something went wrong' });
  }
};
