import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Accueil from './Pages/Accueil.jsx';
// import Etatcivil from './Components/Etat-civil/Etatcivil';
// import Urbanisme from './Pages/Urbanisme.jsx';
import Amenagements from './Pages/Amenagements.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Accueil />} /> */}
          {/* <Route path="/etatcivil" element={<Etatcivil />} /> */}
          {/* <Route path="/urbanisme" element={<Urbanisme />} /> */}
          <Route path="/amenagement" element={<Amenagements />} />

        </Routes>
      </Router> 
    </div>
  );
}

export default App;
