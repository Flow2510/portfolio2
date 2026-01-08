import './techno.scss';
/* eslint-disable no-unused-vars */
import { motion } from 'motion/react';

export default function Techno({usedTechnologies}){
    return(
        <div className="techno">
            <motion.p 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
                className='techno__text'
            >
                Technologies utilisées régulièrement selon les besoins du projet.
            </motion.p>
            <div className='techno__wrapper'>
                <div className="techno__column">
                    <motion.h5
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="techno__column-title"
                    >
                        Frontend
                    </motion.h5>
                    <ul className='techno__list'>
                        {usedTechnologies.front.map((tech) => (
                            <motion.li 
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.4 }}
                                className='techno__list-li' 
                                key={tech}
                            >
                                {tech}
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <div className="techno__column">
                    <motion.h5
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="techno__column-title"
                    >
                        Backend
                    </motion.h5>
                    <ul className='techno__list'>
                        {usedTechnologies.back.map((tech) => (
                            <motion.li 
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.4 }}
                                className='techno__list-li' key={tech}
                            >
                                {tech}
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <div className="techno__column">
                    <motion.h5
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="techno__column-title"
                    >
                        Autres
                    </motion.h5>
                    <ul className='techno__list'>
                        {usedTechnologies.others.map((tech) => (
                            <motion.li 
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.4 }}
                                className='techno__list-li' key={tech}
                            >
                                {tech}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}