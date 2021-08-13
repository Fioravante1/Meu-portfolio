import React from 'react';
import iconetecnologias from '../../Assets/iconetecnologias.png';
import * as k from './style';

function Skils() {
  return (
      <k.SkillConteiner id="habilit" >
        <section data-aos="zoom-in">
          <h1>
            O QUE EU SEI <span>E O QUE ESTOU APREDENDO</span>
          </h1>

          <br/>

          <div>
            <p>
              No momento estou atuando no desenvolvimento de layouts para sites, landing pages e aplicativos. Tenho bom conhecimento em Html5, CSS e Javascript, tambem trabalho com Bootstrap, Sass e Styled Components. Tenho conhecimento em React, Redux e Git para versionamento do meu código. Atualmente venho estudando TypeScript, MySql, MongoDb e NodeJs.
            </p>

            <br/>

            <p>
              Nas criações de protótipos, utilizo o Figma. Quer conhecer um pouco mais sobre o meu trabalho, então confere abaixo o meu portfólio. Pode me chamar para um café.
            </p>
          </div>
        </section>

        <img src={iconetecnologias} alt="tecnologias" data-aos="zoom-in"/>

      </k.SkillConteiner>
  )
}

export default Skils;
