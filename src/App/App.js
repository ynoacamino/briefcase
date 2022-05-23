import './App.css';
import Header from '../Header/Header'
import Home from '../Home/Home'
import {useEffect} from 'react'
import Vanta from '../Vanta/Vanta'

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
      <hr/>
      <h1>Hola </h1>
    </div>
  );
}

export default App;
