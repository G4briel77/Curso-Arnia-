import bcrypt from 'bcrypt';
import { AdminRepository } from '../repositories/adminrepository';

export class AdminService {
    constructor(private repository: AdminRepository) {}

    async create(params: any) {
        const adminAlreadyExists = await this.repository.getByEmail(params.email);
        if (adminAlreadyExists) {
            throw new Error("Admin já existe");
        }

        const hashedPassword = await bcrypt.hash(params.password, 8);

        const payload = {
            ...params,
            password: hashedPassword
        };

        await this.repository.create(payload);
    }

    async authenticate(email: string, password: string): Promise<boolean> {
        const admin = await this.repository.getByEmail(email);
        if (!admin) {
            return false;
        }

        return bcrypt.compare(password, admin.password);
    }
}