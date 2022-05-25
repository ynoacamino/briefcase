import './Projects.css';

const Projects = () => {
  return (
    <div className='Projects'>
      <span className='titleProjects'>Projects</span>
      <div className='projectBox'>
        <div className='leftProjectBox'>
          <span className='nameProject'>Wheather App</span>
          <span className='descriptionProject'>Applicatio ad cognoscendum tempestatem in tempore reali usquam in mundo, cum libera tela API creatum.</span>
          <div className='btnBox'>
            <button className='btn btnProjeact'>
              <a className='link' href='https://github.com/Diegoo11/appClimaApi'>Revisa el codigo =&#41;</a>
            </button>
            <button className='btn btnProjeact'>
              <a className='link' href='https://diegoo11.github.io/appClimaApi/'>Preview</a>
            </button>
          </div>
        </div>
        <div className='rigthProjectBox'>
          <img className='imgProject' src='https://cdn.discordapp.com/attachments/772232222220615710/978810880458387486/apiclimaphoto_2.webp' alt='project photo preview'/>
        </div>
      </div>
    </div>
  )
}

export default Projects