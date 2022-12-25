import { Typography } from '@mui/material'
import React, { Fragment } from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <Fragment>
            <div className="footerBody1">
            <div className="popularLocations">
<Typography  variant='h6'>POPULAR LOCATIONS</Typography>
<ul>
    <li>Kolkata</li>
    <li>Mumbai</li>
<li>Chennai</li>
<li>Pune</li>

</ul>
            </div>
            <div className="trendingLocations">
            <Typography  variant='h6'>TRENDING LOCATIONS</Typography>
            <ul>
    <li>Bhubaneshwar</li>
    <li>Hyderabad</li>
<li>Chandigarh</li>
<li>Nashik</li>

</ul>
            </div>
            <div className="aboutUs">
            <Typography variant='h6'>ABOUT US</Typography>
            <ul>
    <li>About OLX Group</li>
    <li>Careers</li>
<li>Contact Us</li>
<li>OLXPeople</li>
<li>Waah Jobs</li>
</ul>
            </div>
            <div className="olx">
            <Typography  variant='h6'>OLX</Typography>
            <ul>
    <li>Help</li>
    <li>Sitemap</li>
<li>Blog</li>
<li>Legal & Privacy Information</li>
<li>OLX Autos Sell Car</li>
</ul>
            </div>
            <div className="followUs">
            <Typography  variant='h6'>FOLLOW US</Typography>
            <FacebookIcon className='fbicon' sx={{marginLeft:"0.5rem"}}></FacebookIcon>
            <InstagramIcon className='icons'/>
            <TwitterIcon className='icons'/>
            </div>

            </div>
            <div className="footerBody2">
            <div className="otherCountries">
               <b> Other Countries</b> Pakistan-South Africa- Indonesia
            </div>
        <div className="copyright">
        All rights reserved © 2006-2022 OLX
        </div>
            </div>
        </Fragment>
    )
}

export default Footer
