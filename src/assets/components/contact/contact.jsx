import Form from '../form/form';
import './contact.scss';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

export default function Contact(){
    return(
        <section className='contact'>
            <div className='contact__content'>
                <motion.h2 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className='contact__content-title'>
                        Contact
                </motion.h2>
            </div>
            <Form />
        </section>
    )
}