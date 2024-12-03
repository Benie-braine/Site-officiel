import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accueil from './Pages/Accueil.jsx';
import Etatcivil from './Pages/Etatcivil';
import Urbanisme from './Pages/Urbanisme.jsx';
import Amenagements from './Pages/Amenagements.jsx';
import ReglesUrb from './Pages/ReglesUrb.jsx';
import Légalisation from './Pages/Légalisation';
import Transcription from './Pages/Transcription.jsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Servicesocial from './Pages/Servicesocial.jsx';
import Aidesocials from './Pages/Aidesocials.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/etatcivil" element={<Etatcivil />} />
          <Route path="/legalisation" element={<Légalisation />} />
          <Route path="/urbanisme" element={<Urbanisme />} />
          <Route path="/amenagements" element={<Amenagements />} />
          <Route path="/reglesurb" element={<ReglesUrb />} />
          <Route path="/transcription" element={<Transcription />} />
          <Route path="/servicesocial" element={<Servicesocial/>} />
          <Route path="/aidesocials" element={<Aidesocials/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
