import About from '../assets/components/about/about'
import CallToAction from '../assets/components/calltoaction/calltoaction'
import Contact from '../assets/components/contact/contact'
import Gallery from '../assets/components/gallery/gallery'
import Hero from '../assets/components/hero/hero'
import Info from '../assets/components/info/info'
import Header from '../assets/components/header/header'

export default function Home() {
    return(
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <CallToAction
                to="contact"
                title="Discutons d’une opportunité"
                buttonText="Me Contacter"
                />
                <Info />
                <CallToAction
                    title="Téléchargez mon CV"
                    buttonText="Télécharger"
                    to="/cv.pdf"
                    isFile
                />
                <Gallery />
                <Contact />
            </main>
        </>
    )
}