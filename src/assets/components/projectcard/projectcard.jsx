import './projectcard.scss';
import { motion } from 'motion/react';

export default function ProjectCard({ source, alt, title, tags }) {

    return(
            <button className='projectcard'>
                <motion.img 
                    className='projectcard__image' 
                    src={source} alt={alt} 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }} 
                />
                <div className='projectcard__overlay'>
                    <h2>{title}</h2>
                    <div className='projectcard__overlay-tags'>
                        <span key={tags[0]}>{tags[0]}</span>
                        <span key={tags[1]}>{tags[1]}</span>
                        <span key={tags[2]}>{tags[2]}</span>
                    </div>
                </div>
            </button>
    )
}