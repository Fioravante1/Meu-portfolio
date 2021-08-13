import React from 'react';
import * as S from './style';
import fotoperfil from '../../Assets/fotoperfil.png';


function Sobre() {
  return (
      <S.ConteinerSobre id="about">
        
        <S.TitleSobre data-aos="zoom-in">

          <h1>
             SOBRE <span>MIN</span>
          </h1>
          <br />
          <p>
             Olá me chamo Fioravante, tenho 33 anos de Idade. Atualmente estou me graduando em Analise e Desenvolvimento de Sistemas pela Universidade de  Cruzeiro do Sul e também estou cursando Desenvolvimento Full Stack na Trybe. Minhas experiências na tecnologia, vem de projetos desenvolvidos de forma voluntária e dos estudos.
           </p> 
             <br />
           <p>
              Trabalho e acredito em ações que possam gerar impacto positivo na vida das pessoas.
          </p>

           <br/>
           <br/>
           <br/>

           <button>
             DOWNLOAD CV
           </button>

        </S.TitleSobre>
      
     <S.PhotoSobre data-aos="zoom-in">
        <img className="foto__perfil" src={fotoperfil} alt="Fioravante" />
     </S.PhotoSobre>

   </S.ConteinerSobre>
  )
};

export default Sobre;
