import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { AdminService } from '../services/adminservice';
import { AdminRepository } from '../repositories/adminrepository';

const adminService = new AdminService(new AdminRepository());

export const createAdmin = async (req: Request, res: Response) => {
    try {
        await adminService.create(req.body);
        res.status(201).json({ message: 'Admin criado com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao criar admin' });
    }
};

export const loginAdmin = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const isValid = await adminService.authenticate(email, password);
        if (!isValid) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        const token = jwt.sign({ email, role: 'admin' }, process.env.JWT_SECRET!, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao fazer login' });
    }
};