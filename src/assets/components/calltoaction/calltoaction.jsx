import './calltoaction.scss';
import { Link } from 'react-scroll';

export default function CallToAction({ buttonText, title, to, isFile }) {
    return (
        <section className="action">
            <p className="action__text">{title}</p>
            {isFile ? (
                <a
                    href={to}
                    download
                    className="action__button"
                    target="_blank"
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