import React from 'react'
import * as H from './style'

function Header() {
  return (
    <H.HeaderStyled>
      
      <H.TextHeader>
        FIORAVANTE CHIOZZI
      </H.TextHeader>
    
      <H.ContainerHeader>
        <H.TextHeader>
         PROJETOS
        </H.TextHeader>

        <H.TextHeader>
          CONTATO
        </H.TextHeader>
        
        <H.TextHeader>
          SOBRE MIM  
        </H.TextHeader>       
      </H.ContainerHeader>
      
    </H.HeaderStyled>

  )
}

export default Header
