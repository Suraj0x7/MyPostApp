import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import About from './screens/About';
import Home from './screens/Home';
import Contact from './screens/Contact';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
    <div>
     <NavBar> </NavBar>
     <Routes>
        <Route exact path= '/' element={<Home />} ></Route>
        <Route exact path= '/about' element={<About />}> </Route>
        <Route exact path ='/contact' element={<Contact />}></Route>
     </Routes>
    
     <Footer />

    </div>
    </Router>
  );
}

export default App;
