import './App.css'
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
        <Info />
        <CallToAction />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
