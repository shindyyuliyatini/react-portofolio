import React from 'react';
import Header from '../Header';
import About from '../About';
import Weather from '../Weather';
import Footer from '../Footer';

function Home() {
  return (
    <div className="App">
      <Header name="Shindy Yuliyatini" />
      <About />
      <Weather />
      <Footer />
    </div>
  );
}

export default Home;
