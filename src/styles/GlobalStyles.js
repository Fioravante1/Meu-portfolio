import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root{
    --primary-color: #1F2828;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 0.875rem;
`;
