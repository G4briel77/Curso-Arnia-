import Reservation from '../models/reservation';

export class ReservationRepository {
    async create(payload: any) {
        const reservation = new Reservation(payload);
        return reservation.save();
    }

    async cancel(id: string) {
        return Reservation.findByIdAndUpdate(id, { status: 'canceled' }, { new: true });
    }
}