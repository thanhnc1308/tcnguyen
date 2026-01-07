'use client';

import { createContext, useContext } from 'react';

export interface WeddingInvitationContextType {
  isInvitationOpened: boolean;
  handleOpenInvitation: () => void;
}

export const WeddingInvitationContext =
  createContext<WeddingInvitationContextType | null>(null);

export const useWeddingInvitation = () => {
  const context = useContext(WeddingInvitationContext);
  if (!context) {
    throw new Error(
      'useWeddingInvitation must be used within WeddingInvitationProvider',
    );
  }
  return context;
};
