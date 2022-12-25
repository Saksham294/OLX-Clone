import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import {useSelector} from 'react-redux'
import Login from './components/Login/Login';
import { useEffect } from 'react';
import { getAllUnsoldItems } from './Actions/productActions';
import {useDispatch} from 'react-redux'
import {getMyProfile} from './Actions/userActions'
import Home from './components/Home/Home';
import PostItem from './components/PostItem/PostItem';
import Register from './components/Register/Register';
import MPP from './components/MyPurchasesPage/MPP';
import MyPostedItemsPage from './components/MyPostedItemsPage/MyPostedItemsPage';
import PostItemPage from './components/PostItemPage/PostItemPage'

function App() {
const dispatch=useDispatch()
useEffect(()=>{
dispatch(getAllUnsoldItems())
dispatch(getMyProfile())
},[dispatch])

  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <div className="App">

     <Router>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
     <Route path='/login' element={isAuthenticated?<Home/>:<Login/>}></Route>
     <Route path='/register' element={isAuthenticated?<Home/>:<Register/>}></Route>
     <Route path='/postItem' element={isAuthenticated?<PostItem/>:<Login/>}></Route>
     <Route path='/myPurchases' element={isAuthenticated?<MPP/>:<Login/>}></Route>
     <Route path='/myPostedItems' element={isAuthenticated?<MyPostedItemsPage/>:<Login/>}></Route>
     <Route path='/item/:id' element={<PostItemPage/>}></Route>
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