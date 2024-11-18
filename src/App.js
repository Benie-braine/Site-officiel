import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
// import Accueil from './Pages/Accueil';
// import Etatcivil from './Pages/Etatcivil';
=======
import Accueil from './Pages/Accueil.jsx';
// import Etatcivil from './Components/Etat-civil/Etatcivil';
// import Urbanisme from './Pages/Urbanisme.jsx';
>>>>>>> 2ff7fc6423954a38ad1c9314661366c97c4dac24
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
<<<<<<< HEAD
          {/* <Route path="/" element={<Accueil />} /> */}
          {/* <Route path="/" element={<Etatcivil />} /> */}
           <Route path="/" element={<Légalisation />} />
=======
          <Route path="/" element={<Accueil />} />
          {/* <Route path="/" element={<Etatcivil />} /> */}
          {/* <Route path="/" element={<Urbanisme />} /> */}

>>>>>>> 2ff7fc6423954a38ad1c9314661366c97c4dac24
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
