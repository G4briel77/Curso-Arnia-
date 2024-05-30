import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Guest from '../models/guest';

const JWT_SECRET = 'seuSegredoJWT'; // Deveria estar em um arquivo de configuração seguro

export const authenticateGuest = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Buscar o hóspede pelo email
    const guest = await Guest.findOne({ email });
    if (!guest) {
      return res.status(400).json({ message: 'Email ou senha inválidos' });
    }

    // Comparar a senha fornecida com a senha armazenada
    const isPasswordValid = await bcrypt.compare(password, guest.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Email ou senha inválidos' });
    }

    // Gerar um token JWT
    const token = jwt.sign(
      { id: guest._id, role: 'guest' },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao autenticar hóspede.' });
  }
};