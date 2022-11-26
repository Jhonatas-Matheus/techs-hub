import styled from "styled-components";
import Select from "./Select";

export const StyledSelect = styled(Select)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  h2 {
    align-self: flex-start;
    color: var(--grey-zero);
  }
  select {
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
`;
