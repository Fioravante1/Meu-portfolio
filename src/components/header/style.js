import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px 50px;
  align-items: center;

  position: absolute;
  background: rgba(61, 75, 66, 0.05);
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 100px;
  width: 650px;
  height: 40px;
`;

export const TextHeader = styled.h1`
  color: #D8CDA1;
  font-family: 'Times New Roman', Times, serif;
  font-size: 1rem;
  font-style: normal;
`;