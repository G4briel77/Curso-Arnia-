import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

const guestSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

guestSchema.pre<IGuest>('save', async function (next) {
  const guest = this;
  if (!guest.isModified('password')) return next();

  try {
    const hashedPassword = await bcrypt.hash(guest.password, 10);
    guest.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

interface IGuest extends Document {
  name: string;
  email: string;
  password: string;
}

const Guest = mongoose.model<IGuest>('Guest', guestSchema);

export default Guest;