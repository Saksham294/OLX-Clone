import React,{useState} from 'react'
import './Login.css'
import {useDispatch} from 'react-redux'
import {Button, Grid,Link,Paper, Typography} from '@mui/material'
import { TextField } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { loginUser } from '../../Actions/userActions'

const Login = () => {

    const [email,setEmail]=useState("")
    const [password, setPassword] = useState("")
    const dispatch=useDispatch();
    const paperStyle={padding:20,height:'70vh',width:450,margin:"20px auto"}

    const theme = createTheme({
        status: {
          danger: '#e53e3e',
        },
        palette: {
          primary: {
            main: '#0971f1',
            darker: '#053e85',
          },
          neutral: {
            main: '#087cfc',
            contrastText: '#fff',
          },
        },
      });


    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(loginUser(email,password))
      

    }
    return (
       
           <Grid>
          <Paper elevation={10} style={paperStyle}>
              <Typography variant='h4' sx={{fontFamily:"Roboto",fontSize:"50px"}} mt={2} mb={4} ml={20}>Login</Typography>
          <Grid>
          <form onSubmit={loginHandler}>
          <TextField
          value={email}
        required
        id="outlined-required"
        label="Email"
        fullWidth
        mt={2} mb={4}
        onChange={(e) => { setEmail(e.target.value) }}
        
      />
       <TextField
        required
        value={password}
        id="outlined-required"
        label="Password"
        fullWidth
        type='password'
        sx={{marginTop:"5px"}}
        onChange={(e) => { setPassword(e.target.value) }}
        
      />
<ThemeProvider theme={theme}><Button color='neutral' variant="contained" fullWidth type='submit'
sx={{marginTop:"20px"}}

>Sign In</Button></ThemeProvider>



          </form>
          

          </Grid>
          </Paper>
</Grid>
    )}


export default Login
