import styled from "styled-components";
import { string } from "yup";
import Input from "./Input";
interface iInput {
  value?: string;
  readOnly?: boolean;
}
export const StyledInput = styled(Input)<iInput>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;

  margin: 0 auto;

  width: 90%;
  h2 {
    align-self: flex-start;
    color: var(--grey-zero);
  }
  input {
    width: 100%;
    height: 40px;
    padding: 0px 13.0293px;

    border: none;
    border-radius: 8px;

    background-color: var(--grey-two);
    color: var(--text-color);

    &:focus {
      outline: 0.9772px solid #f8f9fa;
    }
  }
  button {
    margin: 0 auto;
    width: 90%;
    min-height: 40px;
  }
`;
