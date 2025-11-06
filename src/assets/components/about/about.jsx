import './about.scss';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

export default function About() {
    return(
        <section className="about" id="about">
            <div className="about__content">
                <motion.h2 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}  
                    className="about__content-title">
                        Développeur Web Junior
                </motion.h2>
                <motion.img 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }} 
                    className="about__content-image" src="/images/worker.webp" alt="un homme travaillant sur son ordinateur devant un bureau" 
                />
                <motion.p 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }} 
                    className="about__content-text">
                        Bonjour, moi c’est Florian,
                </motion.p>
                <motion.p 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }} 
                    className="about__content-text">
                        Je suis développeur front-end passionné par la création d’interfaces modernes, claires et réactives.
                        J’aime transformer des maquettes en expériences web fluides, accessibles et bien structurées, grâce à HTML, SASS et React. 
                </motion.p>
                <motion.p 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="about__content-text">
                        Curieux de nature, j’explore progressivement le back-end JavaScript pour devenir plus polyvalent et comprendre l’ensemble de la chaîne de développement.
                </motion.p>
                <motion.p
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="about__content-text">
                        Mon objectif aujourd’hui : rejoindre une équipe où je pourrai contribuer, apprendre et grandir en construisant des produits utiles et bien conçus.
                </motion.p>
                <motion.p
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="about__content-text">
                        <i className="fa-solid fa-location-dot"></i>Basé dans les Pyrénées-Orientales, mais ouvert à toutes les opportunités (présentiel, hybride ou à distance).
                </motion.p>
            </div>
        </section>
    )
}