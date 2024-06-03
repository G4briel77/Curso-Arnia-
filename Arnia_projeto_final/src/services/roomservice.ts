import { RoomRepository } from '../repositories/roomrepository';

export class RoomService {
    constructor(private repository: RoomRepository) {}

    async create(params: any) {
        const createdRoom = await this.repository.create(params);
        return createdRoom; // Retorna o quarto criado
    }

    async updateStatus(roomId: string, status: string) {
        return this.repository.updateStatus(roomId, status);
    }

    async getAvailableRooms() {
        return this.repository.getAvailableRooms();
    }
}