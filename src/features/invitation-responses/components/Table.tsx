import { TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { DialogRouterIdentifier } from '@/types/dialog-router-identifier';

export function DeleteAction({ id }: { id: string }) {
  return (
    <Link
      id={id}
      href={`/admin/invitation-responses?routerIdentifier=${DialogRouterIdentifier.DeleteInvitationResponse}&id=${id}`}
      className='rounded-md border p-2 hover:bg-gray-100'
    >
      <span className='sr-only'>Delete</span>
      <TrashIcon className='w-5' />
    </Link>
  );
}
