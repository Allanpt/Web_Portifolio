import './App.css'
import Curriculo from './components/Curriculo'
import FixLeft from './components/FixLeft'
import Introducao from './components/Introducao'
import Sobre from './components/Sobre'

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
      </div>
      <div id="right-container">
        
      </div>
    </div>
  )
}

export default App
