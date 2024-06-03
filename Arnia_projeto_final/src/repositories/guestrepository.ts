import Guest from '../models/guest';

export class GuestRepository {
    async getByEmail(email: string) {
        return Guest.findOne({ email });
    }

    async create(payload: any) {
        const guest = new Guest(payload);
        return guest.save();
    }
}