import styled from "styled-components";

export const HeroStyled = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #1F2828;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContainerHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 600px;
  height: 400px;
  background: rgba(61, 75, 66, 0.05);
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
`;

export const NameHero = styled.h1`
  position: static;
  font-size: 2rem;
  color: #000;
`;

export const ProfessionHero = styled.p`
  position: static;
  font-size: 1rem;
  color: #E5E5E5;
`;

export const PhotoHero = styled.div`

img {
  max-width: 150px;
}
`;