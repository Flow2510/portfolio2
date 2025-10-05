import Form from '../form/form';
import './contact.scss';

export default function Contact(){
    return(
        <section className='contact'>
            <div className='contact__content'>
                <h3 className='contact__content-title'>Contact</h3>
            </div>
            <Form />
        </section>
    )
}