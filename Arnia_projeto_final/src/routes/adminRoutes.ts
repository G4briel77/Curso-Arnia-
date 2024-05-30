import express from 'express';
import { registerAdmin, authenticateAdmin } from '../controllers/adminController';
import { verifyToken, isAdmin } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/admin/register', registerAdmin);
router.post('/admin/auth', authenticateAdmin);
router.get('/protected-admin-route', verifyToken, isAdmin, (req, res) => {
  res.status(200).json({ message: 'Acesso permitido: gerente autenticado' });
});

export default router;