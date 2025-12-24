"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DemoModalContextType {
  isOpen: boolean;
  openModal: (service?: string) => void;
  closeModal: () => void;
  initialService: string;
}

const DemoModalContext = createContext<DemoModalContextType | undefined>(undefined);

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialService, setInitialService] = useState('');

  const openModal = (service?: string) => {
    setInitialService(service || '');
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <DemoModalContext.Provider value={{ isOpen, openModal, closeModal, initialService }}>
      {children}
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  const context = useContext(DemoModalContext);
  if (context === undefined) {
    throw new Error('useDemoModal must be used within a DemoModalProvider');
  }
  return context;
}
