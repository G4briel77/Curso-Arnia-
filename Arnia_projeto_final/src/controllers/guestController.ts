import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { GuestService } from '../services/guestservice';
import { GuestRepository } from '../repositories/guestrepository';

const guestService = new GuestService(new GuestRepository());

export const createGuest = async (req: Request, res: Response) => {
    try {
        const guest = await guestService.create(req.body);
        res.status(201).json({ message: 'Guest criado com sucesso', guest });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao criar guest' });
    }
};

export const loginGuest = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const isValid = await guestService.authenticate(email, password);
        if (!isValid) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        const token = jwt.sign({ email, role: 'guest' }, process.env.JWT_SECRET!, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao fazer login' });
    }
};