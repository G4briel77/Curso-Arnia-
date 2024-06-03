import Admin from '../models/admin';

export class AdminRepository {
    async getByEmail(email: string) {
        return Admin.findOne({ email });
    }

    async create(payload: any) {
        const admin = new Admin(payload);
        return admin.save();
    }
}