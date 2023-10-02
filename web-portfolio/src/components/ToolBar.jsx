import './ToolBar.css'
import { Icon } from '@iconify/react';

const ToolBar = ({isVisible}) => {


  return (
    <div className={`tool-bar ${isVisible ? 'toolbar-slide' : ''}`}>
        <h2>Menu</h2>
        <div className="menu-icons">
            <div className="icon">
                <p>Intro</p>
            </div>
        </div>
    </div>
  )
}

export default ToolBar