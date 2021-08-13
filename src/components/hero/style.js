import styled from "styled-components";

export const HeroStyled = styled.section`
  width: 100%;
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
  font-style: italic;
`;

export const ProfessionHero = styled.p`
  position: static;
  font-size: 1rem;
  color: #FFB633;
`;

export const ConteinerIcons = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  width: 50%;
`;

export const LinksHero = styled.a`
  color: #000;
  transition: ease 0.9s;
  :hover {
      transform: translateY(-15px);
    }
`;

export const PhotoHero = styled.div`


`;