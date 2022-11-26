import { useState } from "react";

export const useModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState<string>("false");
  const [modalIsOpenAddTech, setModalIsOpenAddTech] = useState<string>("false");
  const [titleTech, setTitleTech] = useState<string>("");
  const [techId, setTechId] = useState<string>("");
  const [newTechTitle, setNewTechTitle] = useState<string>("");

  const handleOpenModal = (techTitle: string, techId: string) => {
    setTitleTech(techTitle);
    setTechId(techId);
    setModalIsOpen("true");
  };
  const handleCloseModal = () => {
    setModalIsOpen("false");
  };
  const handleOpenModalAddTech = () => {
    setModalIsOpenAddTech("true");
  };
  const handleCloseModalAddTech = () => {
    setModalIsOpenAddTech("false");
  };
  return {
    modalIsOpen,
    setModalIsOpen,
    modalIsOpenAddTech,
    setModalIsOpenAddTech,
    titleTech,
    setTitleTech,
    techId,
    setTechId,
    handleOpenModal,
    handleCloseModal,
    handleOpenModalAddTech,
    handleCloseModalAddTech,
    newTechTitle,
    setNewTechTitle,
  };
};
