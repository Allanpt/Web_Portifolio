import './Sobre.css'
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';

const Sobre = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 160) { 
        setIsVisible(true);
        } else{
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        }
    }, []);

  return (
    <div className={`sobre-container ${isVisible ? 'aparece' : ''}`}>
        <span className='icon-span'><Icon icon="line-md:account"/>Sobre</span>
        <p className='p-span'></p>
        <span className='latim'>Sic Parvis Magna</span>
        <h2 className='first-phrase'>{`"Grandeza em pequenos `}</h2>
        <h2 className='second-phrase'>{`começos"`}</h2>
        <div className="more-about">
            <p>No fim de 2022 começei minha nova jornada na área de desenvolvimento. Estou em busca do meu primeiro emprego na área, e equanto esse grande passo não chega, eu continuo me desenvolvendo para o mercado de trabalho focando MUITO em projetos práticos.</p>
        </div>
    </div>
  )
}

export default Sobre