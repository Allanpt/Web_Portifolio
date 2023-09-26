import './App.css'
import FixLeft from './components/FixLeft'
import Introducao from './components/Introducao'

function App() {

  return (
    <div className='container'>
      <div id="left-container">
        <FixLeft/>
      </div>
      <div id="main-container">
        <Introducao/>
      </div>
      <div id="right-container">
        
      </div>
    </div>
  )
}

export default App
