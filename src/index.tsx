import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer';
import '../src/i18n/config';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <NavBar />
      <App />
      <Footer />
  </React.StrictMode>
);