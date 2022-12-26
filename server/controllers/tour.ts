import Tour from '../models/tour';

export const createTour = async (req: any, res: any) => {
  const tour = req.body;
  const newTour = new Tour({
    ...tour,
    createdAt: new Date().toISOString(),
  });

  try {
    await newTour.save();
    res.status(201).json(newTour);
  } catch (err) {
    res.status(400).json({ message: 'Bad request' });
  }
};

export const getTours = async (req: any, res: any) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({ tours });
  } catch (err) {
    res.status(404).json({ message: 'Something went wrong' });
  }
};
