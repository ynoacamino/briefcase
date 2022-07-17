import POINTS from 'vanta/dist/vanta.net.min';
import { useEffect, useRef, useState} from 'react';
import * as THREE from 'three';
import './Vanta.css'

const Vanta = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)
  useEffect(() => {
    if(!vantaEffect) {
      setVantaEffect(
        POINTS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x8d8d8d,
          backgroundColor: 0x1d1d1b,
          showDots: false,
          THREE
        })
      )
    }
    return () => {
      if(vantaEffect) vantaEffect.destory()
    }
  }, [vantaEffect])
  return (
    <div className='effect3d'>
      <div className='degraded1' id='skills'></div>
      <main className='vanta' ref={vantaRef}>
      </main>
      <div className='degraded2'></div>
      <span className='titleSkills'>Skills</span>
  
    </div>
  )
}

export default Vanta