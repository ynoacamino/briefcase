import './Home.css';

const Home = (props) => {
  return (
    <div className='Home'>
      <img className= 'photoPerfil' src='https://cdn.discordapp.com/attachments/772232222220615710/977954439472218112/fotoPerfilHome.jpg' alt='perfil'/>
      <span className= 'nameHome name'>  Yenaro</span>
      <span className= 'lastNameHome name'>Noa Camino</span>
      <span className= 'devNameHome'>Full stack javascript developer</span>
    </div>
  )
}

export default Home
