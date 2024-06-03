import express from 'express';
import { createReservation, cancelReservation } from '../controllers/reservationController';

const router = express.Router();

router.post('/', createReservation);
router.put('/:reservationId/cancel', cancelReservation);

export default router;