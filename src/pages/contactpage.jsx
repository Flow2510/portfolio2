import Header from "../assets/components/header/header";
import Form from "../assets/components/form/form";
import "./contactpage.scss"

export default function ContactPage() {
    return(
        <>
            <Header />
            <main>
                <section className="contactpage__content">
                    <h2 className="contactpage__content-title">Contact</h2>
                    <p className="contactpage__content-text">Une question, une collaboration ou simplement envie d’échanger ?</p>
                    <p className="contactpage__content-text">N’hésitez pas à me laisser un message, je vous répondrai dès que possible.</p>
                </section>
                <Form />
            </main>
            <footer />
        </>
    )
}