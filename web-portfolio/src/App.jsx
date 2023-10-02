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
import ToolBar from './components/ToolBar'

function App() {


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuVisible, setMenuVisible] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuVisible = () => {
    setMenuVisible(!menuVisible)
    const container = document.querySelector('body');
    const overlay = document.querySelector('.overlay');

    if (menuVisible) {
      container.classList.add('menu-appear-active');
      container.classList.remove('menu-hide-active');
      overlay.style.display = 'block';
    } else {
      container.classList.add('menu-hide-active');
      container.classList.remove('menu-appear-active');
      overlay.style.display = 'none';
    }
  };
  
  return (
    <div className={windowWidth > 1300 ? 'container' : 'container-respon'}>
      <div id="left-container">
        <FixLeft/>
        {menuVisible ? (
          <div className="menu-hide">
            <span onClick={handleMenuVisible}><Icon icon="ep:tools" /></span>
            <ToolBar isVisible={!menuVisible}/>
          </div>
        ) : (
          <div className="menu-appear">
            <span onClick={handleMenuVisible}><Icon icon="ep:tools" /></span>
            <ToolBar isVisible={!menuVisible}/>
          </div>
        )}
        
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
      <div className="overlay" onClick={handleMenuVisible}></div>
    </div>
  )
}

export default App
