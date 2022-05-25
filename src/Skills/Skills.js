import './Skills.css';

const Skills = (props) => {
  return (
    <div className='Skills'>
      <div className='skill'>
        <div className='skillBox'>
          <img className='skillIco' src='https://pedroklepa.com/icons/icon_html.svg' alt=''/>
          <span className='skillName'>HTML</span>
        </div>
        <div className='skillBox'>
          <img className='skillIco' src='https://pedroklepa.com/icons/icon_css.svg' alt=''/>
          <span className='skillName'>CSS</span>
        </div>
        <div className='skillBox'>
          <img className='skillIco' src='https://pedroklepa.com/icons/icon_sass.svg' alt=''/>
          <span className='skillName'>SASS</span>
        </div>
        <div className='skillBox'>
          <img className='skillIco' src='https://pedroklepa.com/icons/icon_javascript.svg' alt=''/>
          <span className='skillName'>JavaScript</span>
        </div>
        <div className='skillBox'>
          <img className='skillIco' src='https://pedroklepa.com/icons/icon_react.svg' alt=''/>
          <span className='skillName'>React</span>
        </div>
        <div className='skillBox'>
          <img className='skillIco' src='https://pedroklepa.com/icons/icon_next.svg' alt=''/>
          <span className='skillName'>NextJS</span>
        </div>
        <div className='skillBox'>
          <img className='skillIco' src='https://pedroklepa.com/icons/icon_styledComponents.svg' alt=''/>
          <span className='skillName'>Styled Components</span>
        </div>
        <div className='skillBox'>
          <img className='skillIco' src='https://pedroklepa.com/icons/icon_framer.svg' alt=''/>
          <span className='skillName'>frame Motion</span>
        </div>
        <div className='skillBox'>
          <img className='skillIco' src='https://pedroklepa.com/icons/icon_jest.svg' alt=''/>
          <span className='skillName'>Jest</span>
        </div>
        <span className='skillGroup'>Front-end</span>
      </div>
      <div className='skill'>
        <div className='skillBox'>
          <img className='skillIco' src='https://pedroklepa.com/icons/icon_nodejs.svg' alt=''/>
          <span className='skillName'>NodeJS</span>
        </div>
        <div className='skillBox'>
          <img className='skillIco' src='https://pedroklepa.com/icons/icon_express.svg' alt=''/>
          <span className='skillName'>Express</span>
        </div>
        <div className='skillBox'>
          <img className='skillIco' src='https://pedroklepa.com/icons/icon_javascript.svg' alt=''/>
          <span className='skillName'>JavaScript</span>
        </div>
        <div className='skillBox'>
          <img className='skillIco' src='https://pedroklepa.com/icons/icon_mongodb.svg' alt=''/>
          <span className='skillName'>MongoDB</span>
        </div>
        <div className='skillBox'>
          <img className='skillIco mongoose' src='https://cdn.discordapp.com/attachments/772232222220615710/978771674759573554/mongoose2-removebg-preview_2.png' alt=''/>
          <span className='skillName '>Mongoose</span>
        </div>
        <div className='skillBox'>
          <img className='skillIco' src='https://pedroklepa.com/icons/icon_pug.svg' alt=''/>
          <span className='skillName'>Pug/Jade</span>
        </div>
        <div className='skillBox'>
          <img className='skillIco' src='https://pedroklepa.com/icons/icon_jest.svg' alt=''/>
          <span className='skillName'>Jest</span>
        </div>
        <span className='skillGroup'>Back-end</span>
      </div>
      <div className='skill'>
        <div className='skillBox'>
          <img className='skillIco' src='https://pedroklepa.com/icons/icon_git.svg' alt=''/>
          <span className='skillName'>Git</span>
        </div>
        <div className='skillBox'>
          <img className='skillIco' src='https://pedroklepa.com/icons/icon_github.svg' alt=''/>
          <span className='skillName'>GitHub</span>
        </div>
        <div className='skillBox'>
          <img className='skillIco' src='https://pedroklepa.com/icons/icon_firebase.svg' alt=''/>
          <span className='skillName'>Firebase</span>
        </div>
        <div className='skillBox'>
          <img className='skillIco' src='https://pedroklepa.com/icons/icon_webpack.svg' alt=''/>
          <span className='skillName'>Webpack</span>
        </div>
        <span className='skillGroup'>Miscellaneous</span>
      </div>
    </div>
  )
}

export default Skills