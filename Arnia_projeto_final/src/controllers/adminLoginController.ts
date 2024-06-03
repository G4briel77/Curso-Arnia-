import 'dotenv/config';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Admin from '../models/admin';
import { AdminService } from '../services/adminservice';
import AdminRepository from '../repositories/adminrepository';

export const loginAdminController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);
    // Verificar a autenticação usando o serviço de admin
    const adminService = new AdminService(AdminRepository);
    console.log('Verificando autenticação...');
    const isValidAdmin = await adminService.authenticate(email, hashedPassword);
    console.log('Autenticação válida?', isValidAdmin);
    if (!isValidAdmin) {
      console.log('Credenciais inválidas');
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Gerar o token JWT
    console.log('Gerando token JWT...');
    const token = jwt.sign(
      { email: email, role: 'admin' },
       '7ebdf7e3d7e6d08de91d25dc269408d6',
      { expiresIn: '1h' }
    );

    res.status(200).json({ token });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ message: 'Erro ao fazer login' });
  }
};