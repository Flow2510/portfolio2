import './calltoaction.scss';
import { Link } from 'react-router-dom';

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
                <Link to={to} className="action__button">
                    {buttonText}
                </Link>
            )}
        </section>
    );
}