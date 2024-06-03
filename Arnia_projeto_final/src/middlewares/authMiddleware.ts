import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = '7ebdf7e3d7e6d08de91d25dc269408d6'

interface AuthRequest extends Request {
  user?: any;
}

export const verifyToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).json({ message: 'Token não fornecido' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).json({ message: 'Falha na autenticação do token' });
    }
    req.user = decoded;
    next();
  });
};

export const isGuest = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (req.user.role !== 'guest') {
    return res.status(403).json({ message: 'Acesso negado: não é um hóspede' });
  }
  next();
};

export const isAdmin = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Acesso negado: não é um gerente' });
  }
  next();
};