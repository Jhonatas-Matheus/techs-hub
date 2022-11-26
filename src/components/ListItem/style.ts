import styled from "styled-components";
interface iListItem {
  id?: string;
}
export const StyledListItem = styled.li<iListItem>`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4.06066px;
  background-color: var(--grey-four);
  padding: 5px 10px;
  button {
    display: none;
    background: transparent;
    border: none;
    align-items: center;
    color: white;
  }
  div {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  @media (min-width: 768px) {
    button {
      display: flex;
    }
  }
`;
