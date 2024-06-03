import { ReservationRepository } from '../repositories/reservationrepository';

export class ReservationService {
    constructor(private repository: ReservationRepository) {}

    async create(params: any) {
        await this.repository.create(params);
    }

    async cancel(id: string) {
        return this.repository.cancel(id);
    }
}