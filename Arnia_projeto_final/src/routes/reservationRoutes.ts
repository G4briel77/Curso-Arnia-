
import express from 'express';
import { cancelReservation, createReservation } from '../controllers/reservationController';
import { verifyToken, isGuest } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/reservations', verifyToken, isGuest, createReservation);
router.delete('/reservations/:reservationId', verifyToken, isGuest, cancelReservation);
export default router;