import './Certificados.css';

const Certificados = () => {
  return (
    <div className='Certificados'>
      <span className='titleCertificados'>Certificados</span>
      <div className='boxCertificado'>
        <img className='imgCertificado' src='https://university.mongodb.com/course_completion/c6d6fa7c-e72a-4095-8ec4-36e7a87909b9/printable?format=img' alt='certificado MondoDB'/>
        <span className='nameCertificado'>MongoDB</span>
      </div>
      <div className='boxCertificado'>
        <img className='imgCertificado' src='https://cdn.discordapp.com/attachments/772232222220615710/979110288215396453/descarga.webp' alt='certificado HackeRank'/>
        <span className='nameCertificado'>HackeRank JavaScript</span>
      </div>
      <div className='boxCertificado'>
        <img className='imgCertificado' src='https://cdn.discordapp.com/attachments/772232222220615710/979113891760062474/unknown.png' alt='certificado HackeRank'/>
        <span className='nameCertificado'>HackeRank Problem Solving</span>
      </div>
    </div>
  )
}

export default Certificados