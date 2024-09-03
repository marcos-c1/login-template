import { Dispatch, SetStateAction, createContext } from "react";

interface ModalContextType {
  isOpen: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined,
);
