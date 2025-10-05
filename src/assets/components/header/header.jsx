import { Link } from 'react-scroll';
import './header.scss';
import { useState } from 'react';

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <header className='header'>
            <Link to='hero' smooth={true} duration={700}><img className='header__logo' src="/public/images/logo.png" alt="" /></Link>
            <nav className={`${isOpen ? "header__nav--active" : "header__nav" }`}>
                <Link to="hero" smooth={true} duration={700} className='header__nav-link' onClick={() => setIsOpen(false)}>Accueil</Link>
                <Link to="info" smooth={true} duration={700} className='header__nav-link' onClick={() => setIsOpen(false)}>À Propos</Link>
                <Link to='gallery' smooth={true} duration={700} className='header__nav-link' onClick={() => setIsOpen(false)}>Projets</Link>
                <Link to='contact' smooth={true} duration={700} className='header__nav-link' onClick={() => setIsOpen(false)}>Contact</Link>
                <div className='header__social'>
                    <a href='https://github.com/Flow2510' target='__blank' className='header__social-link'><i className="fa-brands fa-github"></i></a>
                    <a href='https://fr.linkedin.com/' className='header__social-link' target='__blank'><i className="fa-brands fa-square-linkedin"></i></a>
                    <Link to='contact' smooth={true} duration={700} className='header__social-link'><i className="fa-solid fa-envelope"></i></Link>
                </div>
            </nav>
            <button className={`${isOpen ? "header__button--active" : "header__button"}`} onClick={() => setIsOpen((prev) => !prev)}>
                <div className='header__button-wrapper'>
                    <div className={`${isOpen ? "header__button-line1--active" : "header__button-line1"}`}></div>
                    <div className={`${isOpen ? "header__button-line2--active" : "header__button-line2"}`}></div>
                </div>
            </button>
        </header>
    )
}