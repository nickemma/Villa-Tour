import express from 'express';
import userAuth from '../middleware/userAuth';
import { createTour, getTours } from '../controllers/tour';

const router = express.Router();

router.post('/', userAuth, createTour);
router.get('/', getTours);

export default router;
