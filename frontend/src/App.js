
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import {useSelector} from 'react-redux'
import Login from './components/Login/Login';


function App() {

  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <div className="App">

     <Router>
     <Navbar/>
     <Routes>
  
     <Route path='/login' element={<Login/>}></Route>
     </Routes>
     <Footer/>
     </Router>
  
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