import React, { Fragment } from 'react'
import './Home.css'
import {PostedItemCard} from '../PostedItemCard/PostedItemCard'
import {Typography} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { getMyProfile } from '../../Actions/userActions'

const Home = () => {

const dispatch=useDispatch();

        const unsoldProducts=useSelector((state)=>state.allUnsoldProducts.unsoldProducts)
    const bgUrl="https://statics.olx.in/olxin/autos/landingPage/v1/common/banner_desktop_3840_v2.png"

    useEffect(()=>{
dispatch(getMyProfile())
    },[unsoldProducts,dispatch])

    return (
        <Fragment>
            <img className='homeBg' src={bgUrl}></img>
            <div className="homeHeading"><Typography variant='h5' sx={{marginTop:"3rem"}}>Fresh Recommendations</Typography></div>
           <div className="itemsContainer">
            {unsoldProducts!=undefined? unsoldProducts.map((item)=>(
            <PostedItemCard 
            key={item._id}
            id={item._id}
            title={item.title}
            price={item.price}
            location={item.location}
            image={item.imageUrl.url}
            ></PostedItemCard>
         )):null}
           </div>
        </Fragment>
    )
}

export default Home
