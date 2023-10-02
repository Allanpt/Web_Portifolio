import './ToolBar.css'
import { Icon } from '@iconify/react';

const ToolBar = ({isVisible, handleMenuVisible}) => {

    const handleScrollToPosition = (position) => {
        window.scrollTo({
          top: position,
          behavior: 'smooth'
        });

      };

  return (
    <div className={`tool-bar ${isVisible ? 'toolbar-slide' : ''}`}>
        <h2>Menu</h2>
        <div className="menu-icons">
            <div className="icon">
                <a onClick={() => { handleMenuVisible(); handleScrollToPosition(700); }}>
                    <Icon icon="line-md:home" />
                    <p>Intro</p>
                </a>
            </div>
            <div className="icon">
                <a onClick={() => {handleMenuVisible(); handleScrollToPosition(1741)}}>
                    <Icon icon="line-md:account"/>
                    <p>Sobre</p>
                </a>
            </div>
            <div className="icon">
                <a onClick={() => {handleMenuVisible(); handleScrollToPosition(2295)}}>
                    <Icon icon="ep:suitcase-line" />
                    <p>Currículo</p>
                </a>
            </div>
            <div className="icon">
                <a onClick={() => {handleMenuVisible(); handleScrollToPosition(3494)}}>
                    <Icon icon="icon-park-outline:code-laptop" />
                    <p>Serviços</p>
                </a>
            </div>
            <div className="icon">
                <a onClick={() => {handleMenuVisible(); handleScrollToPosition(4261)}}>
                    <Icon icon="ph:stack-overflow-logo" />
                    <p>Stacks</p>
                </a>
            </div>
            <div className="icon">
                <a onClick={() => {handleMenuVisible(); handleScrollToPosition(5762)}}>
                    <Icon icon="bx:spreadsheet" />
                    <p>Portifólio</p>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ToolBar