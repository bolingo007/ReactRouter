
import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Accueil from './pages/accueil.js';
import APropos from './pages/apropos.js';

// Regle route !!!
function App() {
  return (
    <BrowserRouter>
      <div>Mon menu</div>
      <Routes>
        
        <Route path="/" element={<Accueil />} /> 
        <Route path="/propos" element={<APropos />} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
