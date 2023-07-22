import React from 'react'
import './style.css'
import shad from '../../Images/shad final.jpg'
import { Box, Button} from '@mui/material/'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function Moi() {
  return (
    <div id='Moi'>
        <div className='body' >
        <Box>

          <h2>Hi i'm Bodjui N'koumo Shadrac <br></br>
            Front-end React Developper ▼?</h2>
          <h3>I'm possionate about websites and applications developping, I live in Ivory Coast ❤️😍 </h3>
          <Button variant='contained'>Embauches moi</Button>
          <Button variant='outlined'>Curriculum Vitae</Button>
          <Link to ='https://www.youtube.com/'> <InstagramIcon sx={{cursor:'pointer'}} /></Link>
          <TwitterIcon className='svg' sx={{ cursor: 'pointer' }} />
          <FacebookIcon sx={{ cursor: 'pointer' }} />


        </Box>


        <img className='photo' src={shad}></img> <br />


      </div>
    </div>
  )
}

export default Moi