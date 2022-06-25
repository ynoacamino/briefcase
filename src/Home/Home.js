import './Home.css';
import { motion, useAnimation } from 'framer-motion';

const Home = (props) => {
  return (
    <div className='Home'>
      <img className= 'photoPerfil'
        src='https://cdn.discordapp.com/attachments/772232222220615710/978645007097552937/recortadophoto.webp' alt='perfil'/>
      <motion.img 
      initial={{
        rotate: 10
      }}
      transition={{
        duration: .5
      }}
      whileHover={{
        x: [0, 60],
        opacity: [1, 0]
      }} className= 'photoPerfil'
        src='https://cdn.discordapp.com/attachments/772232222220615710/978805104171970621/fotoPerfilHome_1_11zon_1.webp' alt='perfil'/>
      <motion.span
        transition={{
          duration: 1.1,
          delay: 0.03,
        }}
        initial={{
          x: -450,
          y: -300
        }}
        animate={{
          y: [-300, 0, -80, 0, -20, 0],
          x: [-150, -50, 0]
        }}
        className= 'nameHome name'>Yenaro</motion.span>
      <motion.span
        transition={{
          duration: 1.3,
          delay: 1
        }}
        initial={{
          x: -450,
          y: -500,
        }}
        animate={{
          y: [-500, 0, -160, 0, -40, 0],
          x: [-150, -50, 0]

        }}
        className= 'lastNameHome name'>Noa Camino</motion.span>
      <span className= 'devNameHome'>Full stack javascript developer</span>
    </div>
  )
}

export default Home
