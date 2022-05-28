import './Projects.css';
import CardProject from '../CardProject/CardProject';

const Projects = () => {
  const works = [
    {
      name: 'Wheather App',
      description: 'Una aplicación para conocer el clima en tiempo real en cualquier parte del mundo con una API web gratuita creada.',
      github: 'https://github.com/Diegoo11/appClimaApi',
      preview: 'https://diegoo11.github.io/appClimaApi/',
      img: 'https://cdn.discordapp.com/attachments/772232222220615710/978810880458387486/apiclimaphoto_2.webp',
      llave: '01'
    },
    {
      name: 'Secret Club',
      description: 'Casa club exclusiva donde sus miembros pueden escribir publicaciones anónimas. Y por fuera solo pueden ver la historia y preguntarse quien la escribio.',
      github: 'https://github.com/Diegoo11/secretClub',
      preview: 'https://enigmatic-forest-15876.herokuapp.com/',
      img: 'https://cdn.discordapp.com/attachments/772232222220615710/979016568149270578/2022-05-25_08-10-37.gif',
      llave: '02'
    },
    {
      name: 'Rock Paper Scissors',
      description: 'Piedra, Papel o Tijera, escoge uno y pruea tu suerte contra una computadora, intenta ganarle.',
      github: 'https://github.com/Diegoo11/rock_paper_scissors',
      preview: 'https://diegoo11.github.io/rock_paper_scissors/',
      img: 'https://cdn.discordapp.com/attachments/772232222220615710/979016565683011644/2022-05-25_08-14-17.gif',
      llave: '03'
    },
    {
      name: 'Tic Tac Toe',
      description: 'Tres es raya! Juega con un amigo e intenten hacer un una linea con su marca respectiva, si una gana reinicia y vuelve a intentarlo.',
      github: 'https://github.com/Diegoo11/tictactoe',
      preview: 'https://diegoo11.github.io/tictactoe/',
      img: 'https://cdn.discordapp.com/attachments/772232222220615710/979016565964034129/2022-05-25_08-14-53.gif',
      llave: '04'
    },
    {
      name: 'Fake Facebook',
      description: 'Aplicacion intentando recrear la red social Facebook. Se puede escribir post, añadir comentarios a esos mismos post, ver tus amigos actuales, aceptar y mandar solicitudes a otros usuarios, por ahora esta lleno de personas ficticias :c.',
      github: 'https://github.com/Diegoo11/odin-book',
      preview: 'https://stormy-ridge-72441.herokuapp.com/login',
      img: 'https://cdn.discordapp.com/attachments/772232222220615710/979016566253428807/2022-05-25_08-28-52.gif',
      llave: '05'
    },
    {
      name: 'Donde esta Whali?',
      description: 'Donde esta whali??? Insipirado en el juego ya reconocido en EEUU para mejorar la habalidad de concetracion de los niños al distindir a un personaje llamado whali de muchos eventos a su alrededor.',
      github: 'https://github.com/Diegoo11/donde-esta-whali',
      preview: 'https://where-is-whali.web.app/',
      img: 'https://cdn.discordapp.com/attachments/772232222220615710/979016566941302825/2022-05-25_08-12-04.gif',
      llave: '06'
    },
    {
      name: 'Bathel Ship',
      description: 'Seguro haz jugado este, tu y tu computadra tienen dos tableros con sus respectivos barcos ubicados en ellos, debes atacar a una casilla al azar e intentar destruir los barcos de tu enemigo.',
      github: 'https://github.com/Diegoo11/bathelShip',
      preview: 'https://diegoo11.github.io/bathelShip/',
      img: 'https://cdn.discordapp.com/attachments/772232222220615710/979016567595618424/2022-05-25_08-13-30.gif',
      llave: '07'
    },
    {
      name: 'Restaurant Page',
      description: 'Pagina de restaurante muy improvisada hecha 100% con javascript.',
      github: 'https://github.com/Diegoo11/restaurant_page',
      preview: 'https://diegoo11.github.io/restaurant_page/',
      img: 'https://cdn.discordapp.com/attachments/772232222220615710/979016568426074182/2022-05-25_08-09-41_1.gif',
      llave: '08'
    },
    {
      name: 'Inventory Application',
      description: 'Aplicacion de inventario perfecta para tiendas web, conectada a una backend para mostrarle informacion a los usuarios, y perfecta para agregar, borrar, editar categorias y articulos.',
      github: 'https://github.com/Diegoo11/inventory',
      preview: 'https://limitless-bayou-23084.herokuapp.com/home',
      img: 'https://cdn.discordapp.com/attachments/772232222220615710/979016568736460890/2022-05-25_08-08-50_1.gif',
      llave: '09'
    }
  ]
  return (
    <div className='Projects'>
      <span className='titleProjects' id='projects'>Projects</span>
      {works.map((x) => {
        return <CardProject key={x.llave} name={x.name} description={x.description} github={x.github} preview={x.preview} img={x.img}/>
      })}
    </div>
  )
}

export default Projects