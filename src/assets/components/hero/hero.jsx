// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import './hero.scss';
import { NavLink } from 'react-router-dom';

export default function Hero(){
    return(
        <section className='hero' id='hero'>
            <div className='hero__content'>
                <motion.img 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className='hero__logo' 
                    src="/images/logo.webp" 
                    alt="logo du site" 
                />
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        className='hero__link-wrapper'
                    >
                        <NavLink to="/projects"className='hero__link-1'>Projets</NavLink>
                        <NavLink to="/contact" className='hero__link-2'>Contact</NavLink>
                </motion.div>
            </div>
        </section>
    )
}