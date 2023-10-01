import './FixRight.css'
import { Icon } from '@iconify/react';

const FixRight = () => {
  return (
    <div className='right-container'>
        <div className="icon-menu">
            <a href='#intro-container'>
                <Icon className='left-icon' icon="line-md:home" />
            </a>
            <a href='#intro-container'>
                <Icon className='left-icon' icon="line-md:account"/>
            </a>
            <a href='#intro-container'>
                <Icon className='left-icon' icon="ep:suitcase-line" />
            </a>
            <a href='#intro-container'>
                <Icon className='left-icon' icon="icon-park-outline:code-laptop" />
            </a>
            <a href='#intro-container'>
                <Icon className='left-icon' icon="ph:stack-overflow-logo" />
            </a>
            <a href='#intro-container'>
                <Icon className='left-icon last' icon="bx:spreadsheet" />
            </a>
        </div>
    </div>
  )
}

export default FixRight