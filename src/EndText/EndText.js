import './EndText.css';
import { useEffect } from 'react';
import { InView, useInView } from 'react-intersection-observer';

const Endtext = () => {
  const {ref, inView} = useInView({
    threshold: 1
  });

  useEffect(() => {
    if(inView) {
    }
  }, [inView])

  
  return (
    <span ref={ref} className={'default ' + (inView ? 'writeMachine' : 'vacio')}>Ya estamos llegando al final!</span>
  )
}

export default Endtext