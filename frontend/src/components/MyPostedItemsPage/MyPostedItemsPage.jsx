import React from 'react'
import './MyPostedItemsPage.css'
import {useSelector} from 'react-redux'
import {PostedItemCard} from '../PostedItemCard/PostedItemCard'
import {Typography} from '@mui/material'
import { imageUrl } from './imageUrl'

const MyPostedItemsPage = () => {

    const myPostedItems=useSelector(state=>state.user.user.postedItems)

    const imgBg=imageUrl


    const adBanner="https://i.pinimg.com/originals/c6/b7/8e/c6b78ed22b30a8230f5ccea2ddc88468.jpg"
    return (
        <div className='mpi'>
       <img src={adBanner} className='adBanner'></img>
       <Typography className='itemsHeading' sx={{marginLeft:"5.5rem",marginTop:"3rem"}} variant='h4'>Your Posted Items</Typography>
            <div className='itemsContainer'>
         {myPostedItems.map((item)=>(
            <PostedItemCard 
            key={item._id}
            id={item._id}
            title={item.title}
            price={item.price}
            image={item.imageUrl.url}
            myItems={true}
            location={item.location}
            soldStatus={item.soldStatus}
            ></PostedItemCard>
         ))}
         <img className='imgBg' src={imgBg}></img>
        </div>
        
        </div>
    )
}


export default MyPostedItemsPage
