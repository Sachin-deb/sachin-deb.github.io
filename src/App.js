import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import News from './components/News';
import Research from './components/Research';
import Publications from './components/Publications';
import Experience from './components/Experience';
import Honors from './components/Honors';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Nav />
      <main className="container">
        <Hero />
        <News />
        <Research />
        <Publications />
        <Experience />
        <Honors />
      </main>
      <Footer />
    </div>
  );
}

export default App;
