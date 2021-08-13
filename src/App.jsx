import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Sobre from './components/sobre/Sobre';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <Hero /> 
      <Sobre />
    </>
  );
}

export default App;
