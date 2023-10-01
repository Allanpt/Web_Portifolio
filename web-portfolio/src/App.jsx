import './App.css'
import './AppResp.css'
import Curriculo from './components/Curriculo'
import DownloadPDF from './components/DownloadPDF'
import FinalWords from './components/FinalWords'
import FixLeft from './components/FixLeft'
import FixRight from './components/FixRight'
import Introducao from './components/Introducao'
import Portifolio from './components/Portifolio'
import Servicos from './components/Servicos'
import Sobre from './components/Sobre'
import Stacks from './components/Stacks'

import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

function App() {


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={windowWidth > 1300 ? 'container' : 'container-respon'}>
      <div id="left-container">
        <FixLeft/>
        <span><Icon icon="ep:tools" /></span>
      </div>
      <div id="main-container">
        <DownloadPDF/>
        <Introducao/>
        <Sobre/>
        <Curriculo/>
        <Servicos/>
        <Stacks/>
        <Portifolio/>
        <FinalWords/>
      </div>
      <div id="right-container">
        <FixRight/>
      </div>
    </div>
  )
}

export default App
