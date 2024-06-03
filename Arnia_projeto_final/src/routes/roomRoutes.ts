import express from 'express';
import { createRoom, updateRoomStatus, listAvailableRooms } from '../controllers/roomController';

const router = express.Router();

router.post('/', createRoom);
router.put('/:roomId/status', updateRoomStatus);
router.get('/available', listAvailableRooms);

export default router;