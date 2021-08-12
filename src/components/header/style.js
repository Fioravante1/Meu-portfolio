import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 10px 10px 50px;
  align-items: center;

  position: absolute;
  height: 100px;
  background: rgba(61, 75, 66, 0.05);
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  position: static;
  width: 700px;
  height: 43px;
  left: 1072px;
  top: 40px;
`;

export const TextHeader = styled.h1`
  color: #D8CDA1;
  font-family: 'Times New Roman', Times, serif;
  font-size: 24px;
  font-style: normal;
  position: static;
`;