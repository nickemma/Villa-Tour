import express from 'express';
import userAuth from '../middleware/userAuth';
import { createTour, getTour, getTours } from '../controllers/tour';

const router = express.Router();

router.post('/', userAuth, createTour);
router.get('/', getTours);
router.get('/:id', getTour);

export default router;
