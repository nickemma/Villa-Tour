import express from 'express';
import { createTour, getTours } from '../controllers/tour';

const router = express.Router();

router.post('/', createTour);
router.get('/', getTours);

export default router;
