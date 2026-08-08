import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Portofolio from './pages/Portofolio';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav style={{ padding: '20px', background: 'rgba(0,0,0,0.2)', marginBottom: '20px' }}>
          <Link to="/" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>🏠 
Home</Link>
          <Link to="/about" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' 
}}>📖 About</Link>
          <Link to="/portofolio" style={{ color: 'white', margin: '0 15px', textDecoration: 
'none' }}>📂 Portofolio</Link>
          <Link to="/contact" style={{ color: 'white', margin: '0 15px', textDecoration: 
'none' }}>📩 Contact</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
