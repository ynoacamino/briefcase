import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Vanta from '../Vanta/Vanta';
import Aboutme from '../Aboutme/Aboutme';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Certificados from '../Certificados/Certificados';
import { useEffect } from 'react';
import Contactme from '../Contactme/Contactme';
import Endtext from '../EndText/EndText';
import ViewCode from '../ViewCode/ViewCode';
import Degraded from '../Degraded/Degraded';

function App() {
  
  useEffect(() => {
    const threeScript = document.createElement('script');
    threeScript.setAttribute("id", "threeScript")
    threeScript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js")
    document.getElementsByTagName("head")[0].appendChild(threeScript)
    return () => {
      if(threeScript) {
        threeScript.remove()
      }
    }
  }, [])

  return (
    <div className="App">
      <Header/>
      <Home/>
      <Aboutme/>
      <Degraded />
      <div className='fondoBlack'></div>
      <Vanta/>
      <Skills/>
      <div className='fondoBlack sinShadow'></div>
      <div className='fondoBlack'></div>
      <Projects/>
      <div className='fondoBlack sinShadow'></div>
      <div className='fondoBlack'></div>
      <Certificados/>
      <div className='fondoBlack sinShadow'></div>
      <div className='fondoBlack sinShadow'></div>
      
      <div className='fondoBlack sinShadow'>
        <Endtext/>
      </div>
      <div className='fondoBlack sinShadow'></div>
      <div className='fondoBlack sinShadow'></div>
      <div className='fondoBlack sinShadow' id='contact-me'><div className='line'/></div>
      <Contactme/>
      <div className='fondoBlack sinShadow'><div className='line'/></div>
      <ViewCode/>   
      <div className='fondoBlack sinShadow' style={{height: 60}}></div>
    </div>
  );
}

export default App;
