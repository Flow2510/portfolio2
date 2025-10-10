import { Link } from 'react-scroll';
import './hero.scss';

export default function Hero(){
    return(
        <section className='hero' id='hero'>
            <div className='hero__content'>
                <img className='hero__logo' src="/images/logo.webp" alt="logo du site" />
                <div className='hero__link-wrapper'>
                    <Link to='gallery' smooth={true} duration={700} className='hero__link-1'>
                        Projets
                    </Link>
                    <Link to='contact' smooth={true} duration={700} className='hero__link-2'>
                        Contact
                    </Link>
                </div>
            </div>
        </section>
    )
}