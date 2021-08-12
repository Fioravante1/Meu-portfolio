import styled from "styled-components";

export const HeroStyled = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #1F2828;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 1000px;
  height: 600px;
  left: calc(50% - 1000px/2 - 10px);
  top: 150px;

  background: rgba(61, 75, 66, 0.05);
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
`;

export const NameHero = styled.h1`
  position: static;
  font-size: 36px;
  color: #000;
`;

export const ProfessionHero = styled.p`
  position: static;
  font-size: 32px;
  color: #E5E5E5;
`;

export const PhotoHero = styled.div`

img {
  max-width: 250px;
}
`;