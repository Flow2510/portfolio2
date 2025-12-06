import './skillbar.scss'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

export default function SkillBar({title, score}){
    return(
        <motion.article 
            className='skillbar'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
        >
            <span className='skillbar__title'>{title} :</span>
            <div className='skillbar__wrapper'>
                <div 
                    className='skillbar__score'
                    style={{ width: `${score}%` }}
                >
                </div>
            </div>
        </motion.article>
    )
}