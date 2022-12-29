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
router.get('/me', userAuth, getToursByUser);
router.get('/:id', getTour);
router.delete('/:id', deleteTour);
router.put('/:id', updateTour);

export default router;
