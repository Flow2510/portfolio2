import Form from '../form/form';
import './contact.scss';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

export default function Contact(){
    return(
        <section className='contact'>
            <div className='contact__content'>
                <motion.h2 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    className='contact__content-title'>
                        Contact
                </motion.h2>
            </div>
            <Form />
        </section>
    )
}