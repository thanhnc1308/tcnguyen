import { Guest, GuestAgeComparison } from '@/types/guest';

export const getGuestPronoun = (guest: Guest | null): string => {
  if (!guest || !guest.ageComparison) {
    return 'bạn';
  }

  if (guest.ageComparison === GuestAgeComparison.Same) {
    return 'bạn';
  }

  if (guest.ageComparison === GuestAgeComparison.Younger) {
    return 'em';
  }

  // guest.ageComparison === GuestAgeComparison.Older
  switch (guest.gender) {
    case 'male':
      return 'anh';
    case 'female':
      return 'chị';
    default:
      return 'bạn';
  }
};
