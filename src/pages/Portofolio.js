import React from 'react';
import Footer from '../Footer';

const cardStyle = {
  background: 'rgba(255,255,255,0.1)',
  padding: '15px',
  borderRadius: '10px',
  marginBottom: '10px'
};

function Portofolio() {
  return (
    <div className="App">
      <h1>📂 Portofolio Saya</h1>
      <div style={{ maxWidth: '500px', margin: '20px auto', textAlign: 'left' }}>
        
        <div style={cardStyle}>
          <h3>🌐 Website Portofolio</h3>
          <p>Website portofolio pribadi dengan HTML, CSS, JavaScript, dan React.</p>
          <a href="https://shindyyuliyatin.github.io/proyek-pertama/" target="_blank" 
rel="noopener noreferrer" style={{ color: '#667eea' }}>Lihat →</a>
        </div>
        
        <div style={cardStyle}>
          <h3>🧮 Aplikasi Kalkulator</h3>
          <p>Kalkulator interaktif dengan riwayat perhitungan (Local Storage).</p>
          <a href="https://shindyyuliyatin.github.io/proyek-pertama/kalkulator.html" 
target="_blank" rel="noopener noreferrer" style={{ color: '#667eea' }}>Lihat →</a>
        </div>
<div style={cardStyle}>
  <h3>📱 Aplikasi React Portofolio</h3>
  <p>Website portofolio interaktif dengan React Router.</p>
  <a href="https://shindyyuliyatin.github.io/react-portofolio" target="_blank" rel="noopener 
noreferrer" style={{ color: '#667eea' }}>Lihat →</a>
</div>        
      </div>
      <Footer />
    </div>
  );
}

export default Portofolio;
