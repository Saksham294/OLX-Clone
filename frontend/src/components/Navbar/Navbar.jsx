import React,{useState} from 'react'
import './Navbar.css'
import logo from '../../olxLogo2.png'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { logoutUser } from '../../Actions/userActions';


const Navbar = () => {

  const {isAuthenticated}=useSelector(state=>state.user)
    const [findUser, setFindUser] = useState("")
    const logoUrl="https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png"

    const dispatch=useDispatch()

    const logoutHandler=()=>{
      dispatch(logoutUser())
    }

    return (
        <div className='navMain'>
<Link to='/'><img src={logoUrl}></img></Link>
           <div className="nav">
           <input
          type="text"
          placeholder="Find Cars,Mobile Phones and More..."
          value={findUser}
          onChange={(e)=>{setFindUser(e.target.value)}}
          required

        />
<button><SearchIcon sx={{color:"white",fontSize:"3rem"}}/></button>
           </div>
         <div className="login">
       {isAuthenticated?<button onClick={logoutHandler}>  <p><u>Logout</u></p></button>:<Link to='/login'>  <p><u>Login</u></p></Link>}
         </div>

           
        </div>
    )
}

export default Navbar
