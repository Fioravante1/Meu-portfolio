import React from 'react';
import Particles from 'react-particles-js';
import config from '../../helpers/particleconfig';
import styled from "styled-components";

function ParticleConteiner() {
  return (
    <ConteinerParticle>
      <Particles params={config} />
    </ConteinerParticle>
  );
};

const ConteinerParticle = styled.section`
  width: 92%;
  height: 100vh;
`;

export default ParticleConteiner;


