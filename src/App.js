import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//  import Accueil from './Pages/Accueil';
//  import Etatcivil from './Pages/Etatcivil';
//  import Urbanisme from './Pages/Urbanisme.jsx';
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
          {/* <Route path="/" element={<Accueil />} />
          <Route path="/" element={<Etatcivil />} /> */}
           <Route path="/" element={<Légalisation />} />
             {/* <Route path="/" element={<Urbanisme />} /> */}
        </Routes>
      </Router> 
    </div>
  );
} 

export default App;
