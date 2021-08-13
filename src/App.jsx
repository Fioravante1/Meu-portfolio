import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Sobre from './components/sobre/Sobre';
import Skils from './components/habilidades/Skils';
import { GlobalStyle } from './styles/GlobalStyles';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


function App() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <Hero /> 
      <Sobre />
      <Skils />
      <GlobalStyle />
    </>
  );
}

export default App;
