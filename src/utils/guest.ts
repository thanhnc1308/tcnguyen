import { GuestAgeComparison, GuestGender } from '@/types/guest';

/**
 * Returns the appropriate Vietnamese pronoun pair based on guest's age comparison and gender.
 * - "Bạn" for same-age guests
 * - Gendered honorifics (Anh/Chị, Em) for older/younger guests
 * The second value is "Chúng Mình" (same age) or "Bọn Mình" / similar collective pronoun.
 */
export function getGuestPronoun(
  ageComparison: GuestAgeComparison,
  gender?: GuestGender,
): { guestPronoun: string; wePronoun: string } {
  if (ageComparison === GuestAgeComparison.Same) {
    return { guestPronoun: 'Bạn', wePronoun: 'Chúng mình' };
  }

  if (ageComparison === GuestAgeComparison.Teacher) {
    const guestPronoun = gender === GuestGender.Female ? 'Cô' : 'Thầy';
    return { guestPronoun, wePronoun: 'Chúng em' };
  }

  if (ageComparison === GuestAgeComparison.Older) {
    const guestPronoun = gender === GuestGender.Female ? 'Chị' : 'Anh';
    return { guestPronoun, wePronoun: 'Chúng em' };
  }

  // Younger
  return { guestPronoun: 'Em', wePronoun: 'Chúng mình' };
}
