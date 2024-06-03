import bcrypt from 'bcrypt';
import { GuestRepository } from '../repositories/guestrepository';

export class GuestService {
    constructor(private repository: GuestRepository) {}

    async create(params: any) {
        const guestAlreadyExists = await this.repository.getByEmail(params.email);
        if (guestAlreadyExists) {
            throw new Error("Guest já existe");
        }

        const hashedPassword = await bcrypt.hash(params.password, 8);

        const payload = {
            ...params,
            password: hashedPassword
        };

        await this.repository.create(payload);
    }

    async authenticate(email: string, password: string): Promise<boolean> {
        const guest = await this.repository.getByEmail(email);
        if (!guest) {
            return false;
        }

        return bcrypt.compare(password, guest.password);
    }
}