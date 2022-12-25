import React from 'react'
import './PostItemPage.css'
import {useDispatch,useSelector} from 'react-redux'
import { getItem, purchaseItem } from '../../Actions/productActions'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {ownerDocument, Typography} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Button} from '@mui/material'

const PostItemPage = () => {


    const {user}=useSelector(state=>state.user)
    var userId;
    if(user!=undefined){
        userId=user._id
    }

    const {item}=useSelector(state=>state.productOperations)
    var ownerId;
    if(item!=undefined){
        ownerId=item.owner._id
    }

    var isOwner=false;
    if(user!=undefined && item!=undefined && userId==ownerId){
        isOwner=true;
    }
    const dispatch =useDispatch();
    const {id}=useParams()
    useEffect( ()=>{
   dispatch(getItem(id))

        },[dispatch,item])

const purchaseHandler=(e)=>{
    dispatch(purchaseItem(id))
}
    return (
        <div>
           {item!=undefined?
             <div className="parent">
                <Typography variant='h3' sx={{marginLeft:"1rem",marginBottom:"1rem",fontFamily:"Lato"}}>{item.title}</Typography>
             <div className="largeContainer">
             <div className="imgContainer">
                 <img src={item.imageUrl.url}></img>
             </div>
             
            <div className="rightSideContainer">
           
             
            <div className="topContainer">
            <div className="priceContainer">

                <Typography variant='h3' sx={{marginLeft:"1rem",}}> ₹ {item.price}</Typography>
             </div>
             {
                item.location!=undefined?
                <div className="locationContainer">
                    <Typography variant='h4' sx={{marginLeft:"1rem",marginTop:"2rem"}}>Location</Typography>
                <Typography variant='h5' sx={{marginLeft:"1rem",color:"#E0E0E0"}}> {item.location}</Typography>
             </div>:null
             }
            {item.soldStatus?null:<div className="ownerContainer">
                 <Typography variant='h5' sx={{marginLeft:"1rem",marginTop:"2rem",marginBottom:"2rem",fontFamily:"Lato"}}>Sold By {item.owner.name}</Typography>
             </div>
             }
            </div>
             
             <div className="buttonContainer">
             {item.soldStatus|| isOwner?null:
             <Button onClick={purchaseHandler} sx={{backgroundColor:"#FEBE10",marginLeft:"1rem",width:"22rem",marginTop:"1rem",marginBottom:"2rem",marginRight:"0.8rem",':hover':{bgcolor: '#FEBE10',}}} variant='contained' startIcon={<ShoppingCartIcon/>}>Buy Now</Button>}
             </div>
            </div>
            <div className="descContainer">
                 <Typography variant='h4' sx={{marginLeft:"1rem",fontFamily:"Lato"}}>Product Description</Typography>
             <Typography sx={{marginLeft:"1rem",fontFamily:"Montserrat"}} variant='h6'> {item.description}</Typography>
             </div>
             </div>
             </div>
            :null
           }
        </div>
    )
}

export default PostItemPage
