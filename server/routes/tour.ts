import express from 'express';
import userAuth from '../middleware/userAuth';
import {
  createTour,
  deleteTour,
  getTour,
  getTours,
  getToursByUser,
  updateTour,
} from '../controllers/tour';

const router = express.Router();

router.post('/', userAuth, createTour);
router.get('/', getTours);
router.get('/userTour', userAuth, getToursByUser);
router.get('/:id', getTour);
router.delete('/:id', userAuth, deleteTour);
router.put('/:id', userAuth, updateTour);

export default router;
