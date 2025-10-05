import './calltoaction.scss';
import { Link } from 'react-scroll';

export default function CallToAction(){
    return(
        <section className='action'>
            <p className='action__text'>Discutons d’une opportunité</p>
            <Link to='contact' smooth={true} duration={700} className='action__button'>Me Contacter</Link>
        </section>
    )
}

