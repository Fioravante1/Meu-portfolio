import React from 'react';
import * as S from './style';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import ParticleConteiner from './Particle';

function Hero() {
  return (
    <>
      <S.HeroStyled>

        <ParticleConteiner />

        <S.ContainerHero data-aos="zoom-in">
            
          <S.NameHero>
            FIORAVANTE CHIOZZI
          </S.NameHero>
            <br/>
          <S.ProfessionHero>
            Desenvolvedor Web, Eterno Estudante
          </S.ProfessionHero>
            <br />
          <S.ConteinerIcons>


            <S.LinksHero
              href="https://github.com/Fioravante1"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon style={{ fontSize: 30 }}/>
            </S.LinksHero>

            <S.LinksHero
              href="https://www.linkedin.com/in/fioravantechiozzi/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon style={{ fontSize: 30 }} />
            </S.LinksHero>

            <S.LinksHero
              href="mailto:f.ichiozzi@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <AlternateEmailIcon style={{ fontSize: 30 }} />
            </S.LinksHero>

            <S.LinksHero
              href="https://api.whatsapp.com/send?phone=5511977530630"
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon style={{ fontSize: 30 }} />
            </S.LinksHero>

          </S.ConteinerIcons>
        </S.ContainerHero>
      </S.HeroStyled>

    </>
  )
}

export default Hero
