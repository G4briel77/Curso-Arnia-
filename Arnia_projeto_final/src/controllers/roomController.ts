import { Request, Response } from 'express';
import Room from '../models/Room';

export const updateRoomStatus = async (req: Request, res: Response) => {
  try {
    const { roomId } = req.params;
    const { status } = req.body;

    if (!['available', 'occupied', 'maintenance'].includes(status)) {
      return res.status(400).json({ message: 'Status inválido' });
    }

    const room = await Room.findByIdAndUpdate(
      roomId,
      { status },
      { new: true }
    );

    if (!room) {
      return res.status(404).json({ message: 'Quarto não encontrado' });
    }

    res.status(200).json({ message: 'Status do quarto atualizado com sucesso', room });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar status do quarto' });
  }
};

export const listAvailableRooms = async (req: Request, res: Response) => {
  try {
    const availableRooms = await Room.find({ status: 'available' });
    res.status(200).json({ rooms: availableRooms });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar quartos disponíveis' });
  }
};