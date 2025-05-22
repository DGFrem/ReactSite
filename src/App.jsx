
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './compon/header';
import Footer from './compon/footer';
import Home from './pages/home';
import Gallery from './pages/gallery';
import Projects from './pages/projects';
import Sert from './pages/sert';
import Contact from './pages/contact';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/sert" element={<Sert />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;