import './App.css'
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

function App() {

  return (
    <div className='container'>
      <div id="left-container">
        <FixLeft/>
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
