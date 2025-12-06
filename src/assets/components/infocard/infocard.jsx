import './infocard.scss';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

export default function InfoCard({ icon, iconAlt, title, text }){
    return(
        <motion.article 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className='infocard'>
            <img className='infocard__icon' src={icon} alt={iconAlt} />
            <div className='infocard__content'>
                <h3 className='infocard__content-title'>{title}</h3>
                <p className='infocard__content-text'>{text}</p>
            </div>
        </motion.article>
    )
}