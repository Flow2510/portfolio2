import { Link } from 'react-scroll';
import { Link as RouterLink} from 'react-router-dom';
import './header.scss';
import { useState } from 'react';

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <header className='header'>
            <RouterLink to='/'><img className='header__logo' src="/images/logo.webp" alt="logo du site" /></RouterLink>
            <nav className={`${isOpen ? "header__nav--active" : "header__nav" }`}>
                <RouterLink to="/" className='header__nav-link' onClick={() => setIsOpen(false)}>Accueil</RouterLink>
                <RouterLink to="/about" className='header__nav-link' onClick={() => setIsOpen(false)}>À Propos</RouterLink>
                <RouterLink to='/projects' className='header__nav-link' onClick={() => setIsOpen(false)}>Projets</RouterLink>
                <RouterLink to='/contact' className='header__nav-link' onClick={() => setIsOpen(false)}>Contact</RouterLink>
                <div className='header__social'>
                    <a href='https://github.com/Flow2510' target='__blank' className='header__social-link'><i className="fa-brands fa-github"></i></a>
                    <a href='https://www.linkedin.com/in/florian-sendra-3270961a1/' className='header__social-link' target='__blank'><i className="fa-brands fa-square-linkedin"></i></a>
                    <Link to='contact' className='header__social-link'><i className="fa-solid fa-envelope"></i></Link>
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