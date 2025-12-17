import './about.scss';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

export default function About() {
    return(
        <section className="about" id="about">
            <div className="about__content">
                <motion.h2 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="about__content-title">
                        Développeur Front-end Junior REACT
                </motion.h2>
                <motion.img 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="about__content-image" src="/images/worker.webp" alt="un homme travaillant sur son ordinateur devant un bureau" 
                />
                <motion.p 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="about__content-text">
                        Passionné par l'art de donner vie au design, je transforme les maquettes en expériences web modernes, fluides et accessibles.
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="about__content-text">
                        Spécialisé en HTML, SASS et React, je mets un point d'honneur à livrer des interfaces utilisateur (UI) bien structurées et parfaitement réactives.
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="about__content-text">
                        Animé par l’envie de progresser en continu, je me forme également au back-end JavaScript (Node.js) afin de comprendre l’ensemble du cycle de développement et devenir un développeur plus complet.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="about__content-text">
                        Mon objectif : Contribuer au succès d'une équipe dynamique, apprendre des meilleurs et construire ensemble des produits numériques utiles et bien conçus.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="about__content-text">
                        <i className="fa-solid fa-location-dot"></i>Basé à Perpignan / dans les Pyrénées-Orientales. Ouvert aux opportunités en présentiel, hybride et full remote (télétravail).
                </motion.p>
            </div>
        </section>
    )
}