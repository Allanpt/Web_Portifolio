import { useState } from 'react';
import { Icon } from '@iconify/react';
import './FixRight.css'
const FixRight = () => {


    const [correctIndex, setCorrectIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setCorrectIndex(index);
    };

    const handleMouseLeave = () => {
        setCorrectIndex(null);
    };

    const handleScrollToPosition = (position) => {
        window.scrollTo({
          top: position,
          behavior: 'smooth'
        });
      };

  return (
    <div className='right-container'>
        <div className="icon-menu">
            <a onClick={() => handleScrollToPosition(0)} onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>
                <Icon className='left-icon' icon="line-md:home" />
                {correctIndex === 0 && <div className="hover-div">Intro</div>}
            </a>
            <a onClick={() => handleScrollToPosition(1060)} onMouseEnter={() => handleMouseEnter(1060)} onMouseLeave={handleMouseLeave}>
                <Icon className='left-icon' icon="line-md:account"/>
                {correctIndex === 1060 && <div className="hover-div">Sobre</div>}
            </a>
            <a onClick={() => handleScrollToPosition(1600)} onMouseEnter={() => handleMouseEnter(1600)} onMouseLeave={handleMouseLeave}>
                <Icon className='left-icon' icon="ep:suitcase-line" />
                {correctIndex === 1600 && <div className="hover-div">Currículo</div>}
            </a>
            <a onClick={() => handleScrollToPosition(2777)} onMouseEnter={() => handleMouseEnter(2777)} onMouseLeave={handleMouseLeave}>
                <Icon className='left-icon' icon="icon-park-outline:code-laptop" />
                {correctIndex === 2777 && <div className="hover-div">Serviços</div>}
            </a>
            <a onClick={() => handleScrollToPosition(3540)} onMouseEnter={() => handleMouseEnter(3540)} onMouseLeave={handleMouseLeave}>
                <Icon className='left-icon' icon="ph:stack-overflow-logo" />
                {correctIndex === 3540 && <div className="hover-div">Stacks</div>}
            </a>
            <a onClick={() => handleScrollToPosition(4912)} onMouseEnter={() => handleMouseEnter(4912)} onMouseLeave={handleMouseLeave}>
                <Icon className='left-icon last' icon="bx:spreadsheet" />
                {correctIndex === 4912 && <div className="hover-div">
                    <p>Portifólio</p>
                </div>}
            </a>
        </div>
    </div>
  )
}

export default FixRight