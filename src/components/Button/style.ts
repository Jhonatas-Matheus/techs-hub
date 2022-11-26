/* eslint-disable default-case */
import styled, { css } from "styled-components";
import Button from "./Button";
interface iButton {
  primary?: string;
  secundary?: string;
  disabled?: boolean;
}
export const StyledButton = styled.button<iButton>`
  cursor: pointer;
  ${({ primary, disabled, secundary }) => {
    if (primary === "true") {
      return css`
        border: none;
        border-radius: 4.06066px;
        padding: 0px 22.3336px;
        color: var(--btn-text-color);
        background-color: var(--btn-primary);
        &:hover {
          background-color: var(--btn-primary-hover);
        }
      `;
    } else if (secundary === "true") {
      return css`
        border: none;
        border-radius: 4.06066px;
        padding: 0px 22.3336px;
        color: var(--btn-text-color);
        background-color: var(--btn-secundary);
        &:hover {
          background-color: var(--btn-secundary-hover);
        }
      `;
    } else if (disabled === true) {
      return css`
        color: var(--btn-text-color);
        font-weight: 700;
        border: none;
        border-radius: 4.06066px;
        padding: 0px 22.3336px;
        background-color: var(--btn-disable);
      `;
    } else {
      return css`
        border: none;
        border-radius: 4.06066px;
        padding: 10px 22.3336px;
        color: var(--btn-text-color);
        background-color: var(--btn-default);
        &:hover {
          background-color: var(--btn-default-hover);
        }
      `;
    }
  }}
`;
