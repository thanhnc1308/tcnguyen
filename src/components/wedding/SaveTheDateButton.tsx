'use client';

import { Button } from '@headlessui/react';

export default function SaveTheDateButton({
  onSaveDateClick,
}: {
  onSaveDateClick?: () => void;
}) {
  const handleSaveDateClick = () => {
    if (onSaveDateClick) {
      onSaveDateClick();
    } else {
      // Default behavior - could open calendar app or show modal
      console.log('Save the date clicked');
    }
  };

  return (
    <Button
      onClick={handleSaveDateClick}
      className='bg-white/80 hover:bg-white border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium tracking-wider transition-all duration-300 hover:shadow-lg cursor-pointer'
    >
      SAVE OUR DATE
    </Button>
  );
}
