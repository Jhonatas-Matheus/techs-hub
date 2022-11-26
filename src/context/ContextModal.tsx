import { createContext } from "react";
import { useModal } from "../hooks/useModal";
interface iModalContextProps {
  children: React.ReactNode;
}
interface iModalContext {
  modalIsOpen: string;
  modalIsOpenAddTech: string;
  titleTech: string;
  techId: string;
  handleOpenModal: (techTitle: string, techId: string) => void;
  handleCloseModal: () => void;
  handleOpenModalAddTech: () => void;
  handleCloseModalAddTech: () => void;
  setModalIsOpen: React.Dispatch<React.SetStateAction<string>>;
  setModalIsOpenAddTech: React.Dispatch<React.SetStateAction<string>>;
  newTechTitle: string;
  setNewTechTitle: React.Dispatch<React.SetStateAction<string>>;
}
export const ModalContext = createContext({} as iModalContext);

export const ModalProvider = ({ children }: iModalContextProps) => {
  const {
    modalIsOpen,
    modalIsOpenAddTech,
    titleTech,
    techId,
    handleOpenModal,
    handleCloseModal,
    handleOpenModalAddTech,
    handleCloseModalAddTech,
    setModalIsOpen,
    setModalIsOpenAddTech,
    newTechTitle,
    setNewTechTitle,
  } = useModal();
  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        modalIsOpenAddTech,
        titleTech,
        techId,
        handleOpenModal,
        handleCloseModal,
        handleOpenModalAddTech,
        handleCloseModalAddTech,
        setModalIsOpen,
        setModalIsOpenAddTech,
        newTechTitle,
        setNewTechTitle,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
