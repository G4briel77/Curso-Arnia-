import express from 'express';
import { authenticateGuest } from '../controllers/guestController';
import { verifyToken, isGuest } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/guests', );
router.post('/guests/auth', authenticateGuest);
router.get('/protected-guest-route', verifyToken, isGuest, (req, res) => {
  res.status(200).json({ message: 'Acesso permitido: hóspede autenticado' });
});

export default router;