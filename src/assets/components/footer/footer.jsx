/* eslint-disable no-unused-vars */
import './footer.scss';
import { motion } from 'motion/react';

export default function Footer() {
    return(
        <footer className='footer'>
            <motion.img
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
                className='footer__logo' src="/images/logo.webp" alt="logo flow dev"
            />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
                className='footer__content'
            >
                <p className='footer__content-text'>2025 Sendra Florian – Développeur Front-End</p>
                <a className='footer__content-mail' href="mailto:tonemail@gmail.com">sendra.florian@gmail.com</a>
                <p className='footer__content-text'><i className="fa-solid fa-location-dot" style={{ color: '#ce404d' }}></i>Basé à Perpignan, France</p>
            </motion.div>
        </footer>
    )
}