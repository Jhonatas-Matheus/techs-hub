import styled from "styled-components";
import { StyledButton } from "../../components/Button/style";
export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;
export const StyledSection = styled.section`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  line-height: 250%;
  padding: 40px 15px;
`;
export const StyledContainer = styled.div`
  width: 100%;
  line-height: 250%;
  @media (min-width: 768px) {
    max-width: 60%;
    margin: 0 auto;
  }
`;
export const StyledContainerNews = styled.div`
  display: none;
  width: 100%;
  line-height: 250%;
  @media (min-width: 768px) {
    display: block;
    max-width: 60%;
    margin: 0 auto;
  }
`;
export const StyledRow = styled.div`
  height: 0.08px;
  background-color: var(--grey-one);
  border: none;
`;
export const StyledContainerTecHeader = styled.div`
  width: 100%;
  padding: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 250%;
  @media (min-width: 768px) {
    max-width: 60%;
    margin: 0 auto;
  }
`;
export const StyledContainerTec = styled.ul`
  width: 90%;
  margin: 0 auto;
  padding: 15px 10px;
  border-radius: 4px;
  background-color: var(--grey-three);
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 310px;
  overflow-y: auto;
  line-height: 250%;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--grey-one);
    border-radius: 20px;
    border: 3px solid transparent;
  }
  @media (min-width: 768px) {
    max-width: 60%;
    margin: 0 auto;
    max-height: 60%;
  }
`;
export const StyledButtonAddTec = styled(StyledButton)`
  width: 30px;
  height: 30px;
  display: flex;
  /* background-color: red; */
  align-items: center;
  justify-content: center;
  /* padding: 0; */
  padding: 2px;
  svg {
    width: 1.5em;
    height: 1.5em;
  }
`;
