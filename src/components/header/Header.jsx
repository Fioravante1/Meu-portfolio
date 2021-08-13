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
         PROJETOS
        </H.TextHeader>

        <H.TextHeader>
          CONTATO
        </H.TextHeader>
             
      </H.ContainerHeader>
      
    </H.HeaderStyled>

  )
}

export default Header
