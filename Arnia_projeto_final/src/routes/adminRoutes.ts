import express from 'express';
import { createAdmin, loginAdmin } from '../controllers/adminController';

const router = express.Router();

router.post('/register', createAdmin);
router.post('/login', loginAdmin);

export default router;