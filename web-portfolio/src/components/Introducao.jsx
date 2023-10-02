import './Introducao.css'
import { Icon } from '@iconify/react';
import { TypeAnimation } from 'react-type-animation';
const Introducao = () => {

  

  return (
    <div className='intro-container'>
        <span className='icon-span'><Icon icon="line-md:home" />Introdução</span>
        <p className='p-span'></p>
        <TypeAnimation
          sequence={[ 
            'Hello World, eu sou o Allan,',
            1000, 
            'Hello World, eu sou o Allan, um desenvolvedor FullStack.',
            1000,
            'Hello World, eu sou apaixonado por tecnologia.',
            1000,
            'Seja bem vindo ao meu portifólio !',
            5000
          ]}
          wrapper="span"
          speed={50}
          style={{display: 'inline-block' }}
          repeat={Infinity}
        />
        <p className='bottom-phrase'>Autodidata, Disciplinado e Paciente. Fico esperançoso com o potencial que posso alcançar dentro da programação. Hoje eu desenvolvo projetos simples tanto de Front-end quanto no Back-end.  </p>
        <p>#learningmachine <Icon className='icon' icon="twemoji:robot" /> <Icon className='icon' icon="noto:rocket" /> </p>
        

        <div className="qtd-projects">
          <h3>20+</h3>
          <p>Projetos completos no GitHub</p>
        </div>
    </div>
  )
}

export default Introducao