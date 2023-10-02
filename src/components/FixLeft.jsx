import './FixLeft.css'
import { Icon } from '@iconify/react';
import ImagemDoAllan from '../../public/Imagem do Allan.jpg'
const FixLeft = () => {
  return (
    <div className='left-container'>
        <div className="title">
            <h1>Allan</h1>
            <h3>FullStack Developer</h3>
        </div>
        <img className='allan' src={ImagemDoAllan} alt="foto do allan" />
        <h2>Campinas, SP</h2>
        <div className="links">
            <button>
                <a href="https://github.com/Allanpt" target="_blank" rel="noopener noreferrer">
                    <Icon icon="line-md:github-loop" className='git' />
                </a>
            </button>

            <button>
                <a href="https://www.instagram.com/allan_paixao/" target="_blank" rel="noopener noreferrer">
                    <Icon icon="line-md:instagram" className='insta'/>
                </a>
            </button>

            <button>
                <a href="https://www.linkedin.com/in/allanpaix%C3%A3otavares/" target="_blank" rel="noopener noreferrer">
                    <Icon icon="line-md:linkedin" />
                </a>
            </button>
        </div>
        <button className='email'>
            <a href="mailto:allanxd10@gmail.com" target="_blank" rel="noopener noreferrer">Me mande um E-mail! <Icon icon="line-md:download-outline-loop" /></a>
            
        </button>
    </div>
  )
}

export default FixLeft