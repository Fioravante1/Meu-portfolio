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
             Olá me chamo Fioravante, tenho 33 anos de Idade, sou formado em Marketing pela Universidade Braz   Cubas  e atualmente me graduando em Analise e Desenvolvimento de Sistemas pela Universidade de  Maringá. Tenho   experiência de mais de 6 anos como Designer freelancer, atendendo agências, clientes  finais e parcerias com outros designers.
           </p> 
             <br />
           <p>
             Por 3 anos atuo como analista de marketing na Instel Tecnologia, onde sou responsável pela criação e desenvolvimento de toda a identidade visual da empresa, tal como tambem o website. Nos últimos anos venho estudando e me especializando como desenvolvedor Front-End, através de plataformas como a Origamid, Rocketseat e Udemy.
          </p>

           <br/>
           <br/>
           <br/>

           <button>
             DOWNLOAD CV
           </button>

     
        </S.TitleSobre>

     <S.PhotoSobre data-aos="zoom-in">
        <img src={fotoperfil} alt="Fioravante" />
     </S.PhotoSobre>

   </S.ConteinerSobre>
  )
};

export default Sobre;
