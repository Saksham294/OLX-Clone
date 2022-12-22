
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">

     <Router>
     <Navbar/>
      
     </Router>
     <Footer/>
    </div>
  );
}

export default App;
{/*
      Navbar
      Login/Register
      Post an Item
      react router dom
      purchase an Item
      */}