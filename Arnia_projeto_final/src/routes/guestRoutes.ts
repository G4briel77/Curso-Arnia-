import express from 'express';
import { createGuest, loginGuest } from '../controllers/guestController';

const router = express.Router();

router.post('/register', createGuest);
router.post('/login', loginGuest);

export default router;