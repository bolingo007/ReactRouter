import { useState } from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// components
import Toggle from './components/Toggle';
import Menu from './components/Menu';
// pages
import HomePage from './pages/HomePage.js';
import ContactPage from './pages/ContactPage.js';
import Accueil from './pages/accueil.js';
import APropos from './pages/apropos.js';
import Jeu from './pages/jeu.js';
import Login from './pages/login.js';
import {AuthContext} from './context/AuthContext.js';
import {AuthContext2} from './context/AuthContext2.js';
import Auth2 from './context/Auth.js';
import {AuthContextJeu} from './context/AuthContextJeu.js';

function App() {
  const [navToggled, setNavToggled] = useState(false);

  const handleNavToggle = () => {
    setNavToggled(!navToggled);
  }

  const [auth, setAuth] = useState({isAuth:false,token:null});
  const [auth2, setAuth2] = useState({isAuth:false,token:null});
  const [authJeu, setAuthJeu] = useState({isAuth:false,token:null});

  return (
    <AuthContext.Provider value={[auth, setAuth] }>
      <AuthContextJeu.Provider value={[authJeu, setAuthJeu] }>
      <AuthContext2.Provider value={[auth2, setAuth2] }>
      <div className="App">
        <Toggle handleNavToggle={handleNavToggle}/>
        <BrowserRouter>
        { navToggled ? <Menu handleNavToggle={handleNavToggle} /> : null }
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/contact" element={<ContactPage />} />
            <Route path="/jeu" element={<Jeu />} /> 
            <Route path="/accueil" element={<Accueil />} /> 
            <Route path="/propos" element={<APropos />} /> 
            <Route path="/login" element={<Login />} /> 
            <Route path="/Auth2" element={<Auth2/>} />
          </Routes>
        </BrowserRouter>
      </div>
      </AuthContext2.Provider>
      </AuthContextJeu.Provider>
    </AuthContext.Provider>
  );
}

export default App;