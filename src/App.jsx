import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './assets/components/footer/footer'
import Home from './pages/home'
import Project from './pages/project'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/:projectId" element={<Project />} />
        <Route path="*" element={<h1>404 - Page non trouvée</h1>} />     {/*a changer par une page erreur */}
      </Routes>
      <Footer />
    </>
  )
}

export default App