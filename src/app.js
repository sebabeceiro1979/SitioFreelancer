import React from 'react';
import Header from './components/header';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Main from './components/main';
import Services from './components/services';
import ContactForm from './components/contactForm';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
     <Header />
      <Navbar />
      <Hero />
      <Main>
        <Services />
        <ContactForm />
      </Main>
      <Footer />
    </div>
  );
}

export default App;