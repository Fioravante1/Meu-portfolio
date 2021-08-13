import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Sobre from './components/sobre/Sobre';
import Skils from './components/habilidades/Skils';
import { GlobalStyle } from './styles/GlobalStyles';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Projects from './components/projetos/Projects';
import Contact from './components/contato/Contact';


function App() {

  useEffect(() => {
    Aos.init({
      delay: 200,
      duration: 3000,
    });
  }, []);

  return (
    <>
      <Header />
      <Hero /> 
      <Sobre />
      <Skils />
      <Projects />
      <Contact />
      <GlobalStyle />
    </>
  );
}

export default App;
