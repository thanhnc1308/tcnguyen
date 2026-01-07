import { Guest } from '@/types/guest';
import guestModel from '../db/models/guest.model';

export const getGuestById = async (guestId: string): Promise<Guest | null> => {
  try {
    const foundGuest = await guestModel.findById(guestId);
    return foundGuest;
  } catch (error) {
    console.error('Error fetching guest by ID:', error);
    return null;
  }
};
