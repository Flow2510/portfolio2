import './skillbar.scss'
import { motion } from 'motion/react';

export default function SkillBar({title, score}){
    return(
        <motion.article 
            className='skillbar'
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
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