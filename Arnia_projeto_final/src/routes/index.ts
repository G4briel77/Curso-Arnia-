import express from 'express';
import { validateGuestRegistration, handleValidationErrors } from '../middlewares/validationMiddleware';

const router = express.Router();

router.post('/guests', validateGuestRegistration, handleValidationErrors, );

export default router;