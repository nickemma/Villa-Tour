import express from 'express';
import { register, signin } from '../controllers/user';

const router = express.Router();

router.post('/signup', register);
router.post('/signin', signin);

export default router;