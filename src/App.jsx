import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Footer from './assets/components/footer/footer'
import Home from './pages/home'
import Project from './pages/project'
import ScrollToTop from './assets/components/scrolltotop/scrolltotop'
import ContactPage from './pages/contactpage'
import AboutPage from './pages/aboutpage'
import ProjectsPage from './pages/projectspage'

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<ContactPage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/projects' element={<ProjectsPage />}/>
        <Route path="/:projectId" element={<Project />} />
        <Route path="*" element={<h1>404 - Page non trouvée</h1>} />     {/*a changer par une page erreur */}
      </Routes>
      <Footer />
    </>
  )
}

export default App