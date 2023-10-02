import './Curriculo.css'
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';

const Curriculo = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 710) { 
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
    <div className={`curriculum-container ${isVisible ? 'aparece' : ''}`}>
        <span className='icon-span'><Icon icon="ep:suitcase-line" />Curriculo</span>
        <p className='p-span'></p>
        <h2>Educação e <span>Experiência</span> </h2>
        <div className="educations-experience">
            <div className="title-hover">
                <span><Icon icon="bi:fire" /></span>
                <h6>2023 - Presente</h6>
            </div>
            <h3>Formação Front-end - HTML, CSS, JavaScript, React e + (cursando)</h3>
            <p>Udemy Academy - Matheus Battisti</p>
            <h3>Pós-graduação em Engenharia de Software e Gestão de projetos</h3>
            <p>Faculdade Estratego EAD</p>
        </div>
        <div className="educations-experience">
            <div className="title-hover">
                <span><Icon icon="bi:fire" /></span>
                <h6>Maio 2023 - Setembro 2023</h6>
            </div>
            <h3>Algoritmos e Lógica de Programação em C, C++, Python, C# e Java</h3>
            <p>Udemy Academy - Nélio Alves</p>
            <h3>Java completo, Programação Orientada a Objetos, UML, JDBC, Spring Boot, JPA,
            Hibernate, MySQL, MongoDB</h3>
            <p>Udemy Academy - Nélio Alves</p>
            <h3>Discover</h3>
            <p>Rocketseat - Mayk Brito</p>
        </div>
        <div className="educations-experience">
            <div className="title-hover">
                <span><Icon icon="bi:fire" /></span>
                <h6>2021 - 2023</h6>
            </div>
            <h3>Nagel do Brasil</h3>
            <p>Operador Multifuncional</p>
            <h3>Tecnólogo em Gestão Financeira EAD</h3>
            <p>Centro Universitário Internacional - UNINTER</p>
        </div>
    </div>
  )
}

export default Curriculo