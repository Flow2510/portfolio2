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
                <motion.section 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="contactpage__content"
                >
                    <h2 className="contactpage__content-title">Contact</h2>
                    <p className="contactpage__content-text">Une question, une collaboration ou simplement envie d’échanger ?</p>
                    <p className="contactpage__content-text">N’hésitez pas à me laisser un message, je vous répondrai dès que possible.</p>
                </motion.section>
                <Form />
            </main>
            <footer />
        </>
    )
}