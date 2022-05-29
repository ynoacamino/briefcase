import './Aboutme.css';
import { useEffect, useState } from 'react';
import { InView, useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Aboutme = () => {
  const {ref, inView} = useInView({
    threshold: 1
  });

  const animation = useAnimation()
  const popUp = useAnimation()

  useEffect(() => {
    if(inView) {
      animation.start('visible')
      popUp.start('pop')
    }
  }, [inView])

  const list = {
    visible: {
      rotate: 360,
      transition: {
        duration: 0.5,
        delay: 0.1
      }
    }
  }
  const pop = {
    pop: {
      y: [0, -20, 0],
      transition: {
        duration: 0.5,
        delay: 0.6
      }
    }
  }
  return (
    <div className='Aboutme'>
      <motion.div animate={popUp}
      variants={pop} className='leftAboutme'> 
        <span ref={ref}
        className='titleAbout'
        id='sobre-mi'>Sobre mi</span>
      </motion.div>
      <div className='rigthAboutme'>
      Antes conocer el desarrollo web estaba perdido en lo que quería ser y  trabajar de aquí a unos 15 años, ahora no dudo un poco en decir que lo que me apasiona es el poder resolver problemas y llegar a una solución, me encanta aprender por mi mismo, plantearme problemas y no descansar hasta conseguir una solución. "Me apasiona  el desarrollo web"
      Estudie de la mano de TheOdinProject, esta web no solo me entregaba información lista para aprender sino que me entregaba un problema y "me lanzaba a la piscina" por así decirlo, quería que yo pudiera encontrar la respuesta y desarrollara mi habilidad  para buscar entre la documentación la información. Han pasado 6 meses desde que comencé a estudiar, en el momento que escribo, y siento que ya estoy listo para contribuir al mundo de esta manera, estoy ansioso para poder demostrar de lo que soy capas. Espero que disfrutes mis proyectos.
      </div>
      <motion.img
      style={{ originX: 0.7, originY: 0.7 }}
      animate={animation}
      variants={list}
      id='arrowIco' src='https://www.kkaswenwilk.com/static/media/arrow-light.873e4150.svg' alt=''/>
      <img id='photoAboutme'
      src= 'https://cdn.discordapp.com/attachments/772232222220615710/979467549827805184/IMG_20211211_092641_1.webp'
      alt='photo about me'/>
    </div>
  )
}

export default Aboutme
//<img src='https://cdn.discordapp.com/attachments/772232222220615710/978343723895230554/right.png' alt=''/>
