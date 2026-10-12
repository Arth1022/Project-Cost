import { Route, Routes } from 'react-router-dom'
import Container from './components/layout/Container'
import Home from './pages/Home'
import Company from './pages/Company'
import Contact from './pages/Contact'
import NewProject from './pages/NewProject'
import Project from './pages/Project'
import NavBar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Projects from './pages/Projects'

function App() {
  return (
    <>
      <NavBar />
      <Container customClass='min-height'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App
