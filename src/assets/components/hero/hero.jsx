import { Link } from 'react-scroll';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import './hero.scss';

export default function Hero(){
    const handleKeyPress = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            event.currentTarget.click();
        }
    };

    return(
        <section className='hero' id='hero'>
            <div className='hero__content'>
                <motion.img 
                    initial={{ opacity: 0, y: -50 }}
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
                    <Link onKeyDown={handleKeyPress} tabIndex="0" to='gallery' smooth={true} duration={700} className='hero__link-1'>
                        Projets
                    </Link>
                    <Link onKeyDown={handleKeyPress} tabIndex="0" to='contact' smooth={true} duration={700} className='hero__link-2'>
                        Contact
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}