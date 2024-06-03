import { Request, Response } from 'express';
import { ReservationService } from '../services/reservationrepository';
import { ReservationRepository } from '../repositories/reservationrepository';

const reservationService = new ReservationService(new ReservationRepository());

export const createReservation = async (req: Request, res: Response) => {
    try {
        await reservationService.create(req.body);
        res.status(201).json({ message: 'Reserva criada com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao criar reserva' });
    }
};

export const cancelReservation = async (req: Request, res: Response) => {
    try {
        const { reservationId } = req.params;

        const reservation = await reservationService.cancel(reservationId);

        if (!reservation) {
            return res.status(404).json({ message: 'Reserva não encontrada' });
        }

        res.status(200).json({ message: 'Reserva cancelada com sucesso', reservation });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao cancelar reserva' });
    }
};