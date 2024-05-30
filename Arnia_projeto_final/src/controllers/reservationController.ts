import { Request, Response } from 'express';
import Reservation from '../models/reservation';

export const createReservation = async (req: Request, res: Response) => {
  try {
    const { roomId, guestId, checkInDate, checkOutDate } = req.body;

    const reservation = new Reservation({
      room: roomId,
      guest: guestId,
      checkInDate,
      checkOutDate,
    });

    await reservation.save();

    res.status(201).json({ message: 'Reserva criada com sucesso', reservation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar reserva' });
  }
};
export const cancelReservation = async (req: Request, res: Response) => {
  try {
    const { reservationId } = req.params;

    const reservation = await Reservation.findByIdAndDelete(reservationId);

    if (!reservation) {
      return res.status(404).json({ message: 'Reserva não encontrada' });
    }

    res.status(200).json({ message: 'Reserva cancelada com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao cancelar reserva' });
  }
};