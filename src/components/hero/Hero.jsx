import React from 'react';
import * as S from './style';
import fotoperfil from '../../Assets/fotoperfil.png';
import { ReactComponent as Likedin } from '../../Assets/linkedin.svg';
import { ReactComponent as GitHubIcon } from '../../Assets/github.svg';
import ParticleConteiner from './Particle';

function Hero() {
  return (
    <>
      <S.HeroStyled>
        <ParticleConteiner />
      </S.HeroStyled>

      <S.ContainerHero>
        <S.PhotoHero>
          <img src={fotoperfil} alt="Fioravante" />
        </S.PhotoHero>
        <br/>
        <br/>
        <S.NameHero>
          FIORAVANTE CHIOZZI
        </S.NameHero>
        <br/>
        <S.ProfessionHero>
          Desenvolvedor Web, Eterno Estudante
        </S.ProfessionHero>
        <br />
      <div>
        <a
          href="https://github.com/Fioravante1"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>

        <a
          href="https://www.linkedin.com/in/fioravantechiozzi/"
          target="_blank"
          rel="noreferrer"
        >
          <Likedin />
        </a>
      </div>
      </S.ContainerHero>
    </>
  )
}

export default Hero
