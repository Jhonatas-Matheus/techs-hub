import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
interface iStyledLinkProps {
  primary: string;
  disabled: boolean;
  secundary: string;
}
export const StyledLink = styled(Link)<iStyledLinkProps>`
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
