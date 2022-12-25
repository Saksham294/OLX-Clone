import React,{useState} from 'react'
import './Navbar.css'
import logo from '../../olxLogo2.png'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { logoutUser } from '../../Actions/userActions';
import {Button} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import MenuBar from './MenuBar';
import { IconButton } from '@mui/material';

const Navbar = () => {

  const {isAuthenticated}=useSelector(state=>state.user)
    const [findUser, setFindUser] = useState("")
    const logoUrl="https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png"

    const dispatch=useDispatch()

    const logoutHandler=()=>{
      dispatch(logoutUser())
    }

    return (
        <div>
          <div className='navMain'>
<Link to='/'><img className='logoImg' src={logoUrl}></img></Link>
           <div className="nav">
           <input
           className='searchBox'
          type="text"
          placeholder="Find Cars,Mobile Phones and More..."
          value={findUser}
          onChange={(e)=>{setFindUser(e.target.value)}}
          required

        />
<IconButton sx={{width:"50px",height:"50px",marginTop:"10px",color:"white",backgroundColor:"#082c34"}}>
  <SearchIcon/>
</IconButton>
           </div>

         {isAuthenticated?<MenuBar className='menuBar'/>: <div className="login"><Link className='link' to="/login" style={{ textDecoration: 'none' }}><Button variant='outlined' sx={{marginRight:"1rem"}}>Login</Button></Link></div>}

        <div className="sellButton">
          <Link to='/postItem'><Button className='sell' variant='contained' startIcon={<AddIcon/>} sx={{fontSize:"1rem",backgroundColor:"#FEBE10",':hover':{bgcolor: '#FEBE10', // theme.palette.primary.main
      color: 'white',}}}>Sell</Button></Link>
        </div>
           
        </div>
        <div className="bottomNav"></div>
        </div>
    )
}

export default Navbar
