import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';
import Habilidades from './pages/habilidades/Habilidades';
import Projetos from './pages/projetos/Projetos';
import Contatos from './pages/contato/Contato';
import Navbar from './components/navbar';
import SocialMedia from './components/socialMedias';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contatos" element={<Contatos />} />
        </Routes>
        <SocialMedia />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
