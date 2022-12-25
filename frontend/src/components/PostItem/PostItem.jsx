import React from 'react'
import './PostItem.css'
import { useDispatch,useSelector } from 'react-redux'
import {Button, Grid,Link,Paper, Typography} from '@mui/material'
import {postItem} from '../../Actions/productActions'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {Snackbar} from '@mui/material';
import { getMyProfile } from '../../Actions/userActions'
import { bgImgUrl } from './bgImg'


const PostItem = () => {


  const [open, setOpen] = React.useState(false);

const bgImg=bgImgUrl
    const  dispatch = useDispatch()
    const {loading,message}=useSelector(state=>state.productOperations)
    const vertical='top'
    const horizontal='center'


    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    const [location, setLocation] =React.useState("")

        const [image,setImage]=React.useState(null);
        const [description,setDescription]=React.useState("")
        const [price,setPrice]=React.useState()
    const [title, setTitle] =React.useState("")
        const handleImageChange = (e) => {
            const file = e.target.files[0];
        
            const Reader = new FileReader();
            Reader.readAsDataURL(file);
        
            Reader.onload = () => {
              if (Reader.readyState === 2) {
                setImage(Reader.result);
              }
            };
          };
    
          const submitHandler = async (e) => {
    
            e.preventDefault();
    
await dispatch(postItem(title,price,description,image,location))
    await dispatch(getMyProfile())

    handleClick()
    
          };

    return (
        <div className='parentContainer'>
          <img src={bgImg}></img>
        <div className="postContainer">
       <form onSubmit={submitHandler}>
       <h1>POST YOUR AD</h1>

    {image && <img src={image} alt='post'/>}
<input required type='file' accept='image/*' onChange={handleImageChange}  />

<div className="title">
    <input type="text" placeholder='Ad Title'
    required
value={title} onChange={(e)=>setTitle(e.target.value)}
/>
</div>

    <div className="desc">
    <input type="text" placeholder='Ad Description'
    required
value={description} onChange={(e)=>setDescription(e.target.value)}
/>

    </div>
   <div className="priceBox">
   <input type="number" placeholder='Price'
required

value={price} onChange={(e)=>setPrice(e.target.value)}
/>
   </div>
   <div className='title'>
   <input type="text" placeholder='Location'
required

value={location} onChange={(e)=>setLocation(e.target.value)}
/>
   </div>
    <Button disabled={loading} type="submit" variant='contained' sx={{backgroundColor:"#102c34",':hover':{bgcolor: '#102c34', // theme.palette.primary.main
      color: 'white',}}} >
          POST NOW
        </Button>
       </form>
       {loading?null:<Stack>
        <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar></Stack>}

       
</div>

        </div>
    )
}

export default PostItem
