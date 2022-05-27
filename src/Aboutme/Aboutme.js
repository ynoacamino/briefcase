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
        className='titleAbout'>Sobre mi</span>
      </motion.div>
      <div className='rigthAboutme'>
        Can an opera singer teach themself to program? This portfolio website can be your answer.
        After performing on 3 different continents, winning several vocal competitions, and having met my spouse in an Opera festival, I felt like I had accomplished what I needed to in opera. Also, there were many itches that opera simply couldn't scratch. Then I discovered programming.
        Web development allows me to express my creativity in a more satisfying way, to create with clear structure and to focus in on details in a way I've never been able to do before.
        After over a year of study, I am ready to contribute to the world in this new way, and I'm looking forward to bringing the best traits of a creative developer and focused opera singer to the table. Over my career I have learned how to get things done, keep my cool in dire moments (oh, those stage mishaps the public never even realised happened...), work with lots of different types of people, and take initiative to pick up slack when needed. That plus my ability to learn quickly has helped me to become a creative but also grounded developer (and possibly the only person who feels as good about a standing ovation as about getting that bug out, finally!). I hope you enjoy my projects. Now, cue the curtains!
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
