import { Guest } from '@/types/guest';
import dbConnect from '../db/mongodb';
import guestModel from '../db/models/guest.model';

export const getGuestById = async (guestId: string): Promise<Guest | null> => {
  try {
    await dbConnect();
    const foundGuest = await guestModel.findById(guestId).lean();
    return foundGuest as Guest | null;
  } catch (error) {
    console.error('Error fetching guest by ID:', error);
    return null;
  }
};
