import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import InvitationResponseModel from '@/server/db/models/invitation-response.model';
import GuestModel from '@/server/db/models/guest.model';
import { GuestConfirmationStatus } from '@/types/guest';

const submitResponseSchema = z.object({
  guestId: z.string().optional(),
  name: z.string().min(1, 'Name is required').max(100),
  numberOfGuests: z.number().min(1, 'At least 1 guest is required'),
  message: z.string().max(1000).optional(),
});

export const invitationRouter = router({
  submitResponse: publicProcedure
    .input(submitResponseSchema)
    .mutation(async ({ input }) => {
      const { guestId, name, numberOfGuests, message } = input;

      // Save the invitation response
      const response = await InvitationResponseModel.create({
        guestId,
        name,
        numberOfGuests,
        message,
      });

      // If there's a guestId, update the guest's status to accepted
      if (guestId) {
        await GuestModel.findByIdAndUpdate(guestId, {
          status: GuestConfirmationStatus.Accepted,
          memberCount: numberOfGuests,
        });
      }

      return {
        success: true,
        id: response._id.toString(),
      };
    }),
});
