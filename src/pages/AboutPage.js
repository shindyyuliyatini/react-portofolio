import React from 'react';
import Footer from '../Footer';

function AboutPage() {
  return (
    <div className="App">
      <h1>📖 Tentang Saya</h1>
      <div style={{ maxWidth: '600px', margin: '20px auto', textAlign: 'left' }}>
        <p>Saya adalah <strong>peneliti & pembelajar</strong> yang sedang belajar 
<strong> React </strong> 
dan ingin membuat portofolio yang menarik.</p>
        <p>Saya sangat antusias dengan dunia teknologi dan selalu bersemangat untuk belajar 
hal baru.</p>
        <p>Saat ini saya sedang fokus belajar:</p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ padding: '5px 0' }}>✅ HTML & CSS</li>
          <li style={{ padding: '5px 0' }}>✅ JavaScript (ES6+)</li>
          <li style={{ padding: '5px 0' }}>✅ React</li>
          <li style={{ padding: '5px 0' }}>✅ Git & GitHub</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
