import express from 'express';
import { updateRoomStatus } from '../controllers/roomController';
import { verifyToken, isAdmin } from '../middlewares/authMiddleware';
import { listAvailableRooms } from '../controllers/roomController';
const router = express.Router();

router.patch('/rooms/:roomId/status', verifyToken, isAdmin, updateRoomStatus);
router.get('/rooms/available', listAvailableRooms);
export default router;
