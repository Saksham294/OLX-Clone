import React, { Fragment } from 'react'
import './Home.css'
import {PostedItemCard} from '../PostedItemCard/PostedItemCard'
import {Typography} from '@mui/material'

const Home = () => {
    return (
        <Fragment>
            <div className="homeHeading"><Typography variant='h5'>Fresh Recommendations</Typography></div>
           <div className="itemsContainer">
           <PostedItemCard/>
           <PostedItemCard/>
           <PostedItemCard/>
            
            <PostedItemCard/>
            <PostedItemCard/>
           <PostedItemCard/>
           <PostedItemCard/>
            
            <PostedItemCard/>
           </div>
        </Fragment>
    )
}

export default Home
