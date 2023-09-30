import './Stacks.css'
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';

const Stacks = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 2670) { 
        setIsVisible(true);
        } else{
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        }
    }, []);

  return (
    <div className={`stacks-container ${isVisible ? 'aparece' : ''}`}>
        <span className='icon-span'><Icon icon="ph:stack-overflow-logo" />Stacks</span>
        <p className='p-span'></p>
        <h2>Minhas <span>Stacks</span> </h2>
        <div className="stacks-line">
            <div className="stack">
                <Icon className='icon' icon="devicon:html5" />
                <div className="stack-level proficiente">
                    <span className='one'>|</span>
                    <span className='two'>|</span>
                    <span className='three'>|</span>
                    <span className='four'>|</span>
                </div>
                <h3>Proficiente</h3>
                <p>HTML</p>
            </div>
            <div className="stack">
                <Icon className='icon' icon="devicon:css3" />
                <div className="stack-level proficiente">
                    <span className='one'>|</span>
                    <span className='two'>|</span>
                    <span className='three'>|</span>
                    <span className='four'>|</span>
                </div>
                <h3>Proficiente</h3>
                <p>CSS</p>
            </div>
            <div className="stack">
                <Icon className='icon js' icon="logos:javascript" />
                <div className="stack-level intermediario">
                    <span className='one'>|</span>
                    <span className='two'>|</span>
                    <span className='three'>|</span>
                    <span className='four'>|</span>
                </div>
                <h3>Intermediário</h3>
                <p>JavaScript</p>
            </div>
            <div className="stack">
                <Icon className='icon java' icon="logos:java" />
                <div className="stack-level intermediario">
                    <span className='one'>|</span>
                    <span className='two'>|</span>
                    <span className='three'>|</span>
                    <span className='four'>|</span>
                </div>
                <h3>Intermediário</h3>
                <p>Java</p>
            </div>
            <div className="stack">
                <Icon className='icon py' icon="logos:python" />
                <div className="stack-level intermediario">
                    <span className='one'>|</span>
                    <span className='two'>|</span>
                    <span className='three'>|</span>
                    <span className='four'>|</span>
                </div>
                <h3>Intermediário</h3>
                <p>Python</p>
            </div>
            <div className="stack">
                <Icon className='icon react' icon="logos:react" />
                <div className="stack-level basico">
                    <span className='one'>|</span>
                    <span className='two'>|</span>
                    <span className='three'>|</span>
                    <span className='four'>|</span>
                </div>
                <h3>Básico</h3>
                <p>React</p>
            </div>
            <div className="stack">
                <Icon className='icon spring' icon="devicon:spring" />
                <div className="stack-level basico">
                    <span className='one'>|</span>
                    <span className='two'>|</span>
                    <span className='three'>|</span>
                    <span className='four'>|</span>
                </div>
                <h3>Básico</h3>
                <p>Spring</p>
            </div>
            <div className="stack">
                <Icon className='icon' icon="logos:postgresql" />
                <div className="stack-level basico">
                    <span className='one'>|</span>
                    <span className='two'>|</span>
                    <span className='three'>|</span>
                    <span className='four'>|</span>
                </div>
                <h3>Básico</h3>
                <p>PostgreSQL</p>
            </div>
            <div className="stack">
                <Icon className='icon mongo' icon="devicon:mongodb" />
                <div className="stack-level basico">
                    <span className='one'>|</span>
                    <span className='two'>|</span>
                    <span className='three'>|</span>
                    <span className='four'>|</span>
                </div>
                <h3>Básico</h3>
                <p>MongoDB</p>
            </div>
        </div>
    </div>
  )
}

export default Stacks