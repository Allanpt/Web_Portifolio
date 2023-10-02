import './Portifolio.css'
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import LandingPage from '../../public/Landing-page.webp'
import GifForm from '../../public/gif-form.gif'
import GifDev from '../../public/gif-devnote.gif'
import JDBC from '../../public/Jdbc-project.png'
import SpringJPA from '../../public/spring-boot-jpa.webp'
import SpringMongo from '../../public/spring-mongo.png'
const Portifolio = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 4040) { 
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
    <div className={`portifolio-container ${isVisible ? 'aparece' : ''}`}>
        <span className='icon-span'><Icon icon="bx:spreadsheet" />Portifólio</span>
        <p className='p-span'></p>
        <h2>Projetos em <span>Destaque</span></h2>
        <div className="portifolio-line">
            <div className="project one">
                <a href="https://allanpt.github.io/Mais1Code_Project_Landing_Page/" target="_blank" rel="noopener noreferrer">
                    <img className='img-portifolio landing-page' src={LandingPage} alt="Landing page" />
                    <div className="tecnologies">
                        <div className="tec">HTML</div>
                        <div className="tec">CSS</div>
                        <div className="tec">Bootstrap</div>
                        <div className="tec">Figma</div>
                    </div>
                    <h2>Landing Page - Avatar de Libras para Streaming</h2>
                </a>
            </div>
            <div className="project two">
                <a href="https://allanpt.github.io/DevNotes/" target="_blank" rel="noopener noreferrer">
                    <img className='img-portifolio devnote' src={GifDev} alt="DevNote" />
                    <div className="tecnologies">
                        <div className="tec">HTML</div>
                        <div className="tec">CSS</div>
                        <div className="tec">JavaScript</div>
                    </div>
                    <h2>DevNotes</h2>
                </a>
            </div>
            <div className="project three">
                <a href="https://allanpt.github.io/MultiStepForm_react/" target="_blank" rel="noopener noreferrer">
                    <img className='img-portifolio form-avaliation' src={GifForm} alt="Formulário de Avaliação" />
                    <div className="tecnologies">
                        <div className="tec">React</div>
                    </div>
                    <h2>Formulário de Avaliação do produto ou serviço</h2>
                </a>
            </div>
            <div className="project four">
                <a href="https://github.com/Allanpt/Web_Services_Spring_Boot_JPA_Hibernate" target="_blank" rel="noopener noreferrer">
                    <img className='img-portifolio jpa' src={SpringJPA} alt="Web services jpa" />
                    <div className="tecnologies">
                        <div className="tec">Spring Boot</div>
                        <div className="tec">PostgreSQL</div>
                        <div className="tec">JPA</div>
                    </div>
                    <h2>Criação de banco de dados de clientes</h2>
                </a>
            </div>
            <div className="project five">
                <a href="https://github.com/Allanpt/API_Restful_Spring_Boot_MongoDB_Udemy_project" target="_blank" rel="noopener noreferrer">
                    <img className='img-portifolio mongo' src={SpringMongo} alt="APi Restfull" />
                    <div className="tecnologies">
                        <div className="tec">Spring Boot</div>
                        <div className="tec">MongoDB</div>
                    </div>
                    <h2>Postagens dos usuários em rede social</h2>
                </a>
            </div>
            <div className="project six">
                <a href="https://github.com/Allanpt/Dao_JDBC_project" target="_blank" rel="noopener noreferrer">
                    <img className='img-portifolio jdbc' src={JDBC} alt="JDBC porject" />
                    <div className="tecnologies">
                        <div className="tec">JDBC</div>
                        <div className="tec">MySQL</div>
                    </div>
                    <h2>Organização de funcionários em departamentos</h2>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Portifolio