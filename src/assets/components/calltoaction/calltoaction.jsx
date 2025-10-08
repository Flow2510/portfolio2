import './calltoaction.scss';
import { Link } from 'react-scroll';

export default function CallToAction({ buttonText, title, to, isFile }) {
    return (
        <section className="action">
            <p className="action__text">{title}</p>
            {isFile ? (
                <a
                    href="/public/CV.pdf"
                    download="CV_florian_sendra"
                    className="action__button"
                    rel="noopener noreferrer"
                >
                    {buttonText}
                </a>
            ) : (
                <Link to={to} smooth={true} duration={700} className="action__button">
                    {buttonText}
                </Link>
            )}
        </section>
    );
}