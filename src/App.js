import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ComponentsUrbanisme/ScrollToTop/ScrollToTop.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accueil from './Pages/Accueil.jsx';
import Etatcivil from './Pages/Etatcivil'; // Garder cette ligne
import Urbanisme from './Pages/Urbanisme.jsx';
import Amenagements from './Pages/Amenagements.jsx';
import ReglesUrb from './Pages/ReglesUrb.jsx';
import Légalisation from './Pages/Légalisation'; // Garder cette ligne
import AutorisationsUrbanisme from './Pages/AutorisationsUrbanisme.jsx';
import TravauxUrbanisme from './Pages/TravauxUrbanisme.jsx';
import Technique from './Pages/Technique.jsx';
import Mariage from './Pages/Mariage.jsx';
import Cdq from './Pages/Cdq.jsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop /> {/* Ce composant s'assure que chaque navigation commence en haut */}
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/etatcivil" element={<Etatcivil />} /> {/* Garder cette ligne */}
          <Route path="/legalisation" element={<Légalisation />} /> {/* Garder cette ligne */}
          <Route path="/urbanisme" element={<Urbanisme />} />
          <Route path="/amenagements" element={<Amenagements />} />
          <Route path="/reglesurb" element={<ReglesUrb />} />
          <Route path="/autorisationsurbanisme" element={<AutorisationsUrbanisme />} />
          <Route path="/travauxurbanisme" element={<TravauxUrbanisme />} />
          <Route path="/technique" element={<Technique/>} />
          <Route path="/Mariage" element={<Mariage/>} />
          <Route path="/Cdq" element={<Cdq/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
