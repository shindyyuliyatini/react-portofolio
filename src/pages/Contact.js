import React, { useState } from 'react';
import Footer from '../Footer';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '2px solid #e2e8f0',
    borderRadius: '10px',
    boxSizing: 'border-box'
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      alert('❌ Mohon lengkapi semua field!');
    }
  };

  return (
    <div className="App">
      <h1>📩 Hubungi Saya</h1>
      
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '20px auto', 
textAlign: 'left' }}>
        <div style={{ marginBottom: '15px' }}>
          <label>Nama</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} 
placeholder="Masukkan nama..." style={inputStyle} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} 
placeholder="Masukkan email..." style={inputStyle} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Pesan</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows="4" 
placeholder="Tulis pesan..." style={inputStyle}></textarea>
        </div>
        <button type="submit" style={{ width: '100%', padding: '12px', background: '#667eea', 
color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '16px' 
}}>📤 Kirim Pesan</button>
      </form>
      
      {submitted && (
        <div style={{ background: '#c6f6d5', color: '#22543d', padding: '15px', borderRadius: 
'10px', maxWidth: '500px', margin: '0 auto' }}>
          ✅ Pesan berhasil dikirim! Terima kasih.
        </div>
      )}
      
      <Footer />
    </div>
  );
}

export default Contact;
