import './Home.css';

const Home = (props) => {
  return (
    <div className='Home'>
      <img className= 'photoPerfil' src='https://cdn.discordapp.com/attachments/735526481618534452/977972532990849104/fotoPerfilHome_1_11zon_1.webp' alt='perfil'/>
      <span className= 'nameHome name'>  Yenaro</span>
      <span className= 'lastNameHome name'>Noa Camino</span>
      <span className= 'devNameHome'>Full stack javascript developer</span>
    </div>
  )
}

export default Home
