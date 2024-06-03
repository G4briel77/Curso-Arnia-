import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import { Database } from './database/connetion';
import adminRoutes from './routes/adminRoutes';
import guestRoutes from './routes/guestRoutes';
import roomRoutes from './routes/roomRoutes';
import reservationRoutes from './routes/reservationRoutes';

Database.initialize();

const app = express();
app.use(express.json());

// Rotas de admin
app.use('/admin', adminRoutes);

// Rotas de guests
app.use('/guests', guestRoutes);

// Rotas de rooms
app.use('/rooms', roomRoutes);

// Rotas de reservations
app.use('/reservations', reservationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});