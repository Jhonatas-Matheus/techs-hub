/* eslint-disable default-case */
import styled, { css } from "styled-components";
import BaseTitle from "./components/typography";
interface iTypography {
  typography: string;
  color: string;
  tag: string;
  className?: string;
}
export const Typography = styled(BaseTitle)<iTypography>`
  ${({ typography }) => {
    switch (typography) {
      case "title1":
        return css`
          font-weight: 700;
          font-size: 18px;
          @media (min-width: 768px) {
            font-size: 26px;
          }
        `;
      case "title2":
        return css`
          font-weight: 700;
          font-size: 16px;
        `;
      case "title3":
        return css`
          font-weight: 700;
          font-size: 14px;
        `;
      case "headline":
        return css`
          font-weight: 400;
          font-size: 12px;
        `;
      case "headlinebold":
        return css`
          font-weight: 700;
          font-size: 12px;
        `;
      case "headlineitalic":
        return css`
          font-weight: 700;
          font-size: 12px;
        `;
    }
  }}
  ${({ color }) => {
    switch (color) {
      case "grey-one":
        return css`
          color: var(--grey-one);
        `;
      case "grey-zero":
        return css`
          color: var(--grey-zero);
        `;
      case "primary":
        return css`
          color: var(--color-primary);
        `;
      case "error":
        return css`
          color: var(--color-negative);
        `;
    }
  }}
`;
