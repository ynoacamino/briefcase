import './CardProject.css';
import { motion, useAnimation } from 'framer-motion';

const CardProject = ({name, description, github, preview, img}) => {

  const cardVariants = {
    offscreen: {
      y: 150
    },
    onscreen: {
      y: 50,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  return (
    <motion.div className='projectBox'
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.1 }}
    variants={cardVariants}>
      <div className='leftProjectBox'>
        <span className='nameProject'>{name}</span>
        <span className='descriptionProject'>{description}</span>
        <div className='btnBox'>
          <button className='btn btnProjeact'>
            <a className='link' href={github}>Revisa el codigo =&#41;</a>
          </button>
          <button className='btn btnProjeact'>
            <a className='link' href={preview}>Preview</a>
          </button>
        </div>
      </div>
      <div className='rigthProjectBox'>
        <img className='imgProject' src={img} alt='project photo preview'/>
      </div>
    </motion.div>
  )
}

export default CardProject