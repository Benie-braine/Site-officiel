import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
 import Accueil from './Pages/Accueil';
 import Etatcivil from './Pages/Etatcivil';
 import Urbanisme from './Pages/Urbanisme.jsx';
=======
import Accueil from './Pages/Accueil.jsx';
// import Etatcivil from './Components/Etat-civil/Etatcivil';
import Urbanisme from './Pages/Urbanisme.jsx';
import Amenagements from './Pages/Amenagements.jsx';
import ReglesUrb from './Pages/ReglesUrb.jsx'

>>>>>>> 18eabbdf6452da99b29906f400478da6dccc1c53
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Légalisation from './Pages/Légalisation';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
<<<<<<< HEAD
          <Route path="/" element={<Etatcivil />} />
           <Route path="/" element={<Légalisation />} />
             <Route path="/" element={<Urbanisme />} />
=======
          {/* <Route path="/etatcivil" element={<Etatcivil />} /> */}
          <Route path="/urbanisme" element={<Urbanisme />} />
          <Route path="/amenagements" element={<Amenagements />} />
          <Route path="/reglesurb" element={<ReglesUrb />} />

>>>>>>> 18eabbdf6452da99b29906f400478da6dccc1c53
        </Routes>
      </Router> 
    </div>
  );
} 

export default App;
