import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <main>
      <Info />
      <About />
      <Interests />
      <Footer />
    </main>
  </React.StrictMode>
);
