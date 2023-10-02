import './Servicos.css'
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';

const Servicos = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 1900) { 
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
    <div className={`services-container ${isVisible ? 'aparece' : ''}`}>
        <span className='icon-span'><Icon icon="icon-park-outline:code-laptop" />Serviços</span>
        <p className='p-span'></p>
        <h2>Minhas <span>Especializações</span> </h2>
        <div className="especializations">
            <span><Icon icon="icon-park-twotone:add-web" /></span>
            <h3>Front-end</h3>
            <p>Criei e recriei projetos para web, usando HTML, CSS, JavaScript e React</p>
            <h4>18 PROJETOS</h4>
        </div>
        <div className="especializations">
            <span><Icon icon="majesticons:data-plus-line" /></span>
            <h3>Back-end</h3>
            <p>Construo mini projetos em Java, e armazeno tanto em banco de dados relacional usando PostgreSQL quanto em banco de dados não relacional usando MongoDB. </p>
            <h4>9 PROJETOS</h4>
        </div>
    </div>
  )
}

export default Servicos