import './Contactme.css';
import { useEffect } from 'react';
import { InView, useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Contactme = () => {
  const {ref, inView} = useInView({
    threshold: 1
  });

  const animation = useAnimation()

  useEffect(() => {
    if(inView) {
      console.log('se puede ver');
      animation.start('visible');
    }
    console.log(inView)
  }, [inView])

  const list = {
    visible: {
      x: 50,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: .4
      }
    },
    invisible: {
      x: 900
    }
  }
  
  return (
    <div className='Contactme'>
      <span ref={ref} className='titleContactme'>Contactame</span>
      <div className='hiddenBox'>
        <motion.a initial={list.invisible} animate={animation} variants={list} href='https://www.theodinproject.com' className='linkContactme'>
          ynoacamino@gmail.com
          <img className='icoLink' src='https://www.kkaswenwilk.com/static/media/linkArrow.7c64de5d.svg' alt=''/>
        </motion.a>
      </div>
      <div className='hiddenBox'>
        <motion.a initial={list.invisible} animate={animation} variants={list} href='https://www.theodinproject.com' className='linkContactme'>
          github
          <img className='icoLink' src='https://www.kkaswenwilk.com/static/media/linkArrow.7c64de5d.svg' alt=''/>
        </motion.a>
      </div>
      <div className='hiddenBox'>
        <motion.a initial={list.invisible} animate={animation} variants={list} href='https://www.theodinproject.com' className='linkContactme'>
          HackeRank
          <img className='icoLink' src='https://www.kkaswenwilk.com/static/media/linkArrow.7c64de5d.svg' alt=''/>
        </motion.a>
      </div>
      <div className='hiddenBox'>
        <motion.a initial={list.invisible} animate={animation} variants={list} href='https://www.theodinproject.com' className='linkContactme'>
          CV
          <img className='icoLink' src='https://www.kkaswenwilk.com/static/media/linkArrow.7c64de5d.svg' alt=''/>
        </motion.a>  
      </div>
    </div>
  )
}

export default Contactme