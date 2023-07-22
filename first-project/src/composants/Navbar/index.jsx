import React from 'react'
import style from './style.css'
import { AppBar, Box, Button, Toolbar } from '@mui/material'
import { Browser as Router, Route } from '@mui/material'
import { Link as Lien } from 'react-scroll'
import { BrowserRouter, Link } from 'react-router-dom'
import SecondPage from '../../Second page'
import Moi from '../About/Moi'
import Menu from '../Menu'


function Navbar() {
  return (
    <div>

      <nav className='.nav' sx={{ color: 'Blue' }} >

        <div className='navbar'>

          <h1 className='titre'>Shadrac.dev</h1>
          <ul className='quatre'>
            <Lien to='menu'> <li>Accueil</li></Lien>
            <li>Moi</li>
            <Link to='/SecondPage' ><li> Projets</li> </Link>
            <Lien to='carte'>  <li>Contacts</li> </Lien>
          </ul>
          <div class="burger" onclick="">
                <div class="premier"></div>
                <div class="premier"></div>
                <div class="premier"></div>
            </div>
        </div>


      </nav>
    




    </div>
  )
}

export default Navbar