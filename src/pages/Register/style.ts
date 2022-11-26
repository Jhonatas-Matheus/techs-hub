import styled from "styled-components";
import { StyledMain } from "../Login/style";

export const StyledMainRegister = styled(StyledMain)`
  header {
    display: flex;
    width: 93%;
    max-width: 400px;
    max-height: 420px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  form {
    overflow-y: auto;
  }
`;
