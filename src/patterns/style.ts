import styled from "styled-components";
import Form from "./Form";

export const StyledForm = styled(Form)`
  width: 93%;
  max-width: 400px;
  height: 60%;
  min-height: 500px;
  max-height: 500px;
  padding: 34px 0;
  overflow-y: auto;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 22px;
  text-align: center;

  margin: 0 auto;

  background-color: var(--grey-three);
  &::-webkit-scrollbar {
    width: 5px; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--grey-two); /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 10px solid transparent;
  }
  button {
    margin: 0 auto;
    width: 90%;
    min-height: 40px;
  }
`;
