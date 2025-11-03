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
        </footer>
    )
}