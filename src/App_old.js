import { useState } from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// components
import Toggle from './components/Toggle';
import Menu from './components/Menu';
// pages
import HomePage from './pages/HomePage.js';
import ExamplePage from './pages/ExamplePage.js';
import ContactPage from './pages/ContactPage.js';
import Accueil from './pages/accueil.js';
import APropos from './pages/apropos.js';
import Jeu from './pages/jeu.js';
import Login from './pages/login.js';

function App() {

  const [navToggled, setNavToggled] = useState(false);

  const handleNavToggle = () => {
    setNavToggled(!navToggled);
  }

  return (
    <div className="App">
      <Toggle handleNavToggle={handleNavToggle}/>
      <BrowserRouter>
      { navToggled ? <Menu handleNavToggle={handleNavToggle} /> : null }
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/example" element={<ExamplePage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route path="/jeu" element={<Jeu />} /> 
          <Route path="/accueil" element={<Accueil />} /> 
          <Route path="/propos" element={<APropos />} /> 
          <Route path="/login" element={<Login />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;