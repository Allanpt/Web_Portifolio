import './App.css'
import Curriculo from './components/Curriculo'
import FixLeft from './components/FixLeft'
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
        <Introducao/>
        <Sobre/>
        <Curriculo/>
        <Servicos/>
        <Stacks/>
        <Portifolio/>
      </div>
      <div id="right-container">
        
      </div>
    </div>
  )
}

export default App
