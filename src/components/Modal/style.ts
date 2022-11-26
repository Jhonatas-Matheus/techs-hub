import styled, { css } from "styled-components";
import Modal from "./Modal";
import { StyledButton } from "../Button/style";
interface iModalProps {
  isOpen: string;
}
export const StyledModalBackGround = styled.div<iModalProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;

  ${({ isOpen }) => {
    if (isOpen === "true") {
      return css`
        background-color: rgba(18, 18, 20, 0.5);
        transition: 0.5s;
      `;
    } else if (isOpen === "false") {
      return css`
        background-color: transparent;
        transition: 0.5s;
        pointer-events: none;
      `;
    }
  }}
`;

export const StyledModalBody = styled.div<iModalProps>`
  background-color: var(--grey-three);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto auto;
  width: 90%;
  padding-bottom: 20px;
  max-width: 400px;
  /* height: 40%; */
  ${({ isOpen }) => {
    if (isOpen === "true") {
      return css`
        transform: translateY(0%);
        transition: 0.5s;
      `;
    } else if (isOpen === "false") {
      return css`
        transform: translateY(-200%);
        transition: 0.5s ease-in-out;
        opacity: 0;
      `;
    }
  }}
  label {
    margin-top: 20px;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    button {
      align-self: center;
    }
  }
  div {
    display: flex;
    align-self: center;
    gap: 20px;
  }
  button {
    width: auto;
  }
`;
export const StyledButtonModal = styled(StyledButton)`
  width: 90%;
  margin-top: 15px;
  min-height: 40px;
`;
export const StyledModalHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  min-height:50px;
  background-color: var(--grey-two);
  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    svg {
      width: 100%;
      height: 100%;
      transform: scale(1.5);
      color: var(--grey-one) !important;
      path {import { StyledButton } from '../Button/style';

        color: var(--grey-one);
      }
    }
  }
`;
