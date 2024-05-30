import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

const adminSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

adminSchema.pre<IAdmin>('save', async function (next) {
  const admin = this;
  if (!admin.isModified('password')) return next();

  try {
    const hashedPassword = await bcrypt.hash(admin.password, 10);
    admin.password = hashedPassword;
    next();
  } catch (error) 
{next();
  }
);

interface IAdmin extends Document {
  name: string;
  email: string;
  password: string;
}

const Admin = mongoose.model<IAdmin>('Admin', adminSchema);

export default Admin;