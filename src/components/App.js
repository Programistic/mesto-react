import React from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';

function App() {
  return (
    <div className="page">
      <div className="container">
        <Header/>
        <Main/>
        <Footer/>
        <PopupWithForm/>
      </div>
    </div>
  );
}

export default App;

