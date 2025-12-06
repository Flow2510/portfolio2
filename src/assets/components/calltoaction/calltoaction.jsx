// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import './calltoaction.scss';
import { Link } from 'react-router-dom';

export default function CallToAction({ buttonText, title, to, isFile }) {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="action"
        >
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
        </motion.section>
    );
}