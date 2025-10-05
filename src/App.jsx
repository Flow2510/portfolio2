import './App.css'
import About from './assets/components/about/about'
import CallToAction from './assets/components/calltoaction/calltoaction'
import Contact from './assets/components/contact/contact'
import Footer from './assets/components/footer/footer'
import Gallery from './assets/components/gallery/gallery'
import Header from './assets/components/header/header'
import Hero from './assets/components/hero/hero'
import Info from './assets/components/info/info'

function App() {


  return (
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
      <Footer />
    </>
  )
}

export default App
