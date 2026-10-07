import { Route, Routes } from 'react-router-dom'
import Container from './components/Container'
import Home from './pages/Home'
import Company from './pages/Company'
import Contact from './pages/Contact'
import NewProject from './pages/NewProject'
import Project from './pages/Projects'
import NavBar from './components/Navbar'
import Footer from './components/Footer'

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
          <Route path="/projects" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App
