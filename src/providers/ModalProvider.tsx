import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { Color } from 'types/single-color-response';

type Props = {
  children: ReactNode;
};

type Context = {
  isOpen: boolean;
  colorData: Color | null;
  handleOpenModal: (color: Color) => void;
  handleCloseModal: () => void;
};

const ModalContext = createContext<Context | null>(null);

export const ModalProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [colorData, setColorData] = useState<Color | null>(null);

  const handleOpenModal = useCallback((color: Color) => {
    setColorData(color);
    setIsOpen(true);
  }, []);
  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const contextData = {
    isOpen,
    colorData,
    handleOpenModal,
    handleCloseModal,
  };

  return <ModalContext.Provider value={contextData}>{children}</ModalContext.Provider>;
};

export const useModal = () => {
  const modalData = useContext(ModalContext);

  if (!modalData) throw Error('useColorsData is supposed to be used inside ColorsDataProvider');

  return modalData;
};
