import React,{useState} from 'react'
import './Navbar.css'
import logo from '../../olxLogo2.png'
import SearchIcon from '@mui/icons-material/Search';


const Navbar = () => {
    const [findUser, setFindUser] = useState("")
    const logoUrl="https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png"
    return (
        <div className='navMain'>
<img src={logoUrl}></img>
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
         <p><u>Login</u></p>
         </div>

           
        </div>
    )
}

export default Navbar
