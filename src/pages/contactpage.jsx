import Header from "../assets/components/header/header";
import Form from "../assets/components/form/form";
import "./contactpage.scss"
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export default function ContactPage() {
    return(
        <>
            <Header />
            <main>
                <section className="contactpage__hero"></section>
                <section className="contactpage__content">
                    <motion.h2 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="contactpage__content-title"
                    >
                        Contact
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="contactpage__content-text"
                    >
                        Vous avez une question, un projet en tête ou l’envie de discuter de votre présence en ligne ?
                    </motion.p>
                    <motion.p 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="contactpage__content-text"
                    >
                        Je suis toujours ravi d’échanger autour du développement web, de la création d’interfaces modernes ou de nouvelles idées à explorer.
                    </motion.p>
                    <motion.p 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="contactpage__content-text"
                    >
                        Que vous recherchiez un développeur pour donner vie à votre site, améliorer une application existante, collaborer sur un projet créatif ou simplement obtenir quelques conseils, je suis à votre écoute.
                    </motion.p>
                    <motion.p 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="contactpage__content-text"
                    >
                        Remplissez le formulaire ou envoyez-moi un message directement : je m’engage à vous répondre dans les plus brefs délais.
                    </motion.p>
                    <motion.p 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="contactpage__content-text"
                    >
                        Au plaisir d’échanger avec vous et, pourquoi pas, de construire ensemble votre prochain projet digital.
                    </motion.p>
                    <Form />
                </section>
            </main>
            <footer />
        </>
    )
}