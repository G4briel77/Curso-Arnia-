import Room from '../models/Room';

export class RoomRepository {
    async getById(id: string) {
        return Room.findById(id);
    }

    async create(payload: any) {
        const room = new Room(payload);
        return room.save();
    }

    async updateStatus(id: string, status: string) {
        return Room.findByIdAndUpdate(id, { status }, { new: true });
    }

    async getAvailableRooms() {
        return Room.find({ status: 'available' });
    }
}