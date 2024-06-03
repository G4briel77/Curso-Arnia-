import { Request, Response } from 'express';
import { RoomService } from '../services/roomservice';
import { RoomRepository } from '../repositories/roomrepository';

const roomService = new RoomService(new RoomRepository());

export const createRoom = async (req: Request, res: Response) => {
    try {
        const room =  await roomService.create(req.body);
        res.status(201).json({ message: 'Quarto criado com sucesso', room });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao criar quarto' });
    }
};

export const updateRoomStatus = async (req: Request, res: Response) => {
    try {
        const { roomId } = req.params;
        const { status } = req.body;

        const room = await roomService.updateStatus(roomId, status);

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
        const availableRooms = await roomService.getAvailableRooms();
        res.status(200).json({ rooms: availableRooms });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao buscar quartos disponíveis' });
    }
};