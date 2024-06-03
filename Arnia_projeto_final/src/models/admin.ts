import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

interface IAdmin extends Document {
    name: string;
    email: string;
    password: string;
}

const adminSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

adminSchema.pre<IAdmin>('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 8);
    next();
});

const Admin = mongoose.model<IAdmin>('Admin', adminSchema);

export default Admin;