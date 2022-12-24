import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import {useSelector} from 'react-redux'
import Login from './components/Login/Login';
import { useEffect } from 'react';
import { getAllUnsoldItems } from './Actions/productActions';
import {useDispatch} from 'react-redux'
import Home from './components/Home/Home';
import PostItem from './components/PostItem/PostItem';
import Register from './components/Register/Register';

function App() {
const dispatch=useDispatch()

useEffect(()=>{
dispatch(getAllUnsoldItems())
})

  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <div className="App">

     <Router>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/register' element={<Register/>}></Route>
     <Route path='/postItem' element={isAuthenticated?<PostItem/>:<Login/>}></Route>
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