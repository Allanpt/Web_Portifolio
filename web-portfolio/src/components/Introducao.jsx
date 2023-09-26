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
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />
        <p className='bottom-phrase'>Desenvolvo aplicações simples tanto em Front-end quanto em Back-end.</p>
    </div>
  )
}

export default Introducao