'use client';

import { toggleGuestInvited } from '@/actions/guest.action';
import { EnvelopeIcon, EnvelopeOpenIcon } from '@heroicons/react/24/outline';
import { useTransition } from 'react';

export function ToggleInvitedAction({
  id,
  invited,
}: {
  id: string;
  invited: boolean;
}) {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      await toggleGuestInvited(id);
    });
  };

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className='rounded-md border p-2 hover:bg-gray-100 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed'
      title={invited ? 'Mark as not invited' : 'Mark as invited'}
    >
      <span className='sr-only'>
        {invited ? 'Mark as not invited' : 'Mark as invited'}
      </span>
      {invited ? (
        <EnvelopeOpenIcon className='w-5 text-green-600' />
      ) : (
        <EnvelopeIcon className='w-5' />
      )}
    </button>
  );
}
