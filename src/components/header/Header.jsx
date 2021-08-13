import React from 'react';
import * as H from './style';
import { Link } from 'react-scroll';

function Header() {
  return (
    <H.HeaderStyled>
      
      {/* <H.TextHeader>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        >
          FIORAVANTE CHIOZZI
        </Link>
      </H.TextHeader> */}
    
      <H.ContainerHeader>
      <H.TextHeader>
          <Link
            activeClass="active"
            to="about"
            spy={false}
            smooth={true}
            offset={0}
            duration={800}
          >
            SOBRE MIM  
          </Link>
        </H.TextHeader>  

        <H.TextHeader>
          <Link
            activeClass="active"
            to="habilit"
            spy={false}
            smooth={true}
            offset={0}
            duration={800}
          >
            HABILIDADES 
          </Link>
        </H.TextHeader>

        <H.TextHeader>
          <Link
            activeClass="active"
            to="projetos"
            spy={false}
            smooth={true}
            offset={0}
            duration={800}
          >
            PROJETOS
          </Link>
        </H.TextHeader>

        <H.TextHeader>
          <Link
            activeClass="active"
            to="contato"
            spy={false}
            smooth={true}
            offset={0}
            duration={800}
          >
            CONTATO
          </Link>
        </H.TextHeader>
             
      </H.ContainerHeader>
      
    </H.HeaderStyled>

  )
}

export default Header
