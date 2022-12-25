import React from 'react'
import './MPP.css'
import {PostedItemCard} from '../PostedItemCard/PostedItemCard'
import {Typography} from '@mui/material'
import {useSelector} from 'react-redux'

const MPP = () => {

    const myPurchasedItems=useSelector(state=>state.user.user.purchasedItems)
const iphoneBanner="https://thumbs.dreamstime.com/b/vinnytsia-ukraine-september-vector-banner-iphone-vector-illustration-app-web-presentation-design-vector-banner-iphone-230042240.jpg"
    return (
        <div className='mpp'>
            <img src={iphoneBanner} className="iphoneBanner"></img>
           <Typography sx={{marginLeft:"5.5rem",marginTop:"3rem"}} variant='h4'>Your Purchased Items</Typography>
           <div className="itemsContainer">
           {myPurchasedItems.map((item)=>(
            <PostedItemCard 
            key={item._id}
            id={item._id}
            title={item.title}
            price={item.price}
            image={item.imageUrl.url}
            location={item.location}
            ></PostedItemCard>
         ))}
           </div>
        </div>
    )
}

export default MPP
