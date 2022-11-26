import React from "react";
import {
  StyledModalBackGround,
  StyledModalBody,
  StyledModalHeader,
} from "./style";
import { Typography } from "../../styles/typography";
import { IoMdClose } from "react-icons/io";
interface iModal {
  children: React.ReactNode;
  isOpen: string;
  title: string;
  closeModal: () => void;
}
const Modal = ({ children, isOpen, title, closeModal }: iModal) => {
  return (
    <>
      <StyledModalBackGround isOpen={isOpen}>
        <StyledModalBody isOpen={isOpen}>
          <StyledModalHeader>
            <Typography tag="h2" typography="title3" color="grey-zero">
              {title}
            </Typography>
            <button onClick={closeModal}>
              <IoMdClose />
            </button>
          </StyledModalHeader>
          {children}
        </StyledModalBody>
      </StyledModalBackGround>
    </>
  );
};

export default Modal;
