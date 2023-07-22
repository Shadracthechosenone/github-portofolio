import React from 'react'
import './style.css'
import bug from '../../Images/l2.jpg'
import shad from '../../Images/shad final.jpg'
import fer from '../../Images/l1 mod.png'
import mus from '../../Images/l3.jpg'
import { Box, Container, Button, Zoom } from '@mui/material/'
import { Grid } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import Carrousselimage from '../Carousselimage'
import { Link as Lien } from 'react-scroll'








function Menu() {
  return (
    <div id='menu'>

      <div className='body' sx={{width:'100%' }} >
        
  
        
          <Container className='Container'sx={{width:'100%' }}>


          <h2>Hi i'm Bodjui N'koumo Shadrac <br></br>
            Front-end React Developper ▼?</h2>
          <h3>I'm possionate about websites and applications developping, I live in Ivory Coast ❤️😍 </h3>
          <Button variant='contained'>Embauches moi</Button>
          <Button variant='outlined'>Curriculum Vitae</Button>
          <Link to ='https://www.youtube.com/'> <InstagramIcon sx={{cursor:'pointer'}} /></Link>
          <Link to ='https://www.twitter.com/'><TwitterIcon  sx={{ cursor: 'pointer' }} /></Link>
          <Link to ='https://www.facebook.com/'><FacebookIcon sx={{ cursor: 'pointer' }} /></Link>

          </Container>

        


        <img className='photo'  src={shad}></img> <br />



      </div>

        <Container style={{width:'100%'  }}   >
          <p className='experience' >
            J'ai 5 annees d'experience , travaille a Orange data center et a SGBCI et ete en stage <br></br>
            a Random Enterprise et je suis capable de travailler a pleins temps <br></br>
            pour atteindre les objectifs de la dite societe
          </p>
        </Container>



      <Container className='Presentation'>
        <h4> A props de moi</h4>
        <h5> Pourquoi me choisir ?</h5>
        <p> Je suis diplome de la prestigieuse ecole d'informatique denommee Esatic , j'suis <br>
        </br>  je possede un BAC +5 en Developpement Web et Mobile    </p>

      </Container>

      <Container className='car' style={{width:'100%'  }}>

        <img className='grid' src={bug}></img>

      </Container>



      <Container >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ipsum corporis ratione, reiciendis unde deleniti quae fuga sapiente tenetur perspiciatis saepe beatae exercitationem voluptas, corrupti perferendis? Officia quis ullam eos!
        Iure, quis! Possimus inventore officia atque, laudantium in explicabo est modi eum, voluptates tempore alias tempora fugiat provident, beatae voluptas! Tenetur atque, eligendi soluta nam pariatur dolore ducimus accusantium illo!
        Atque omnis eveniet in vel ducimus sequi et obcaecati quidem molestiae adipisci dignissimos voluptas laborum itaque eaque incidunt dolorem rerum, quae sapiente nobis autem? Hic alias nobis sed debitis ipsa?
        Ipsa porro, totam eveniet modi et assumenda. Pariatur, nihil sunt? Dolore provident modi perspiciatis labore sequi culpa eum, voluptatem adipisci itaque praesentium molestiae tenetur fugit quasi at dolor repellendus ullam!
        Eius ab eaque, nesciunt culpa pariatur repellendus quos error hic id dicta quae temporibus sapiente quasi vitae perspiciatis nisi deserunt consectetur sint consequuntur a? Doloremque unde recusandae ullam fugit. Fuga!

      </Container>

      <Container sx={{ marginTop: '6rem' }} id='carte'>
        
        <div className='displaygrid' >



          <div >

            <form action="#">
              <div>
                <label className='labels'>Nom</label>
              </div>
              <div>
                <input type="text" />
              </div>
              <div>
                <label className='labels'>Prenoms</label>
              </div>
              <div>
                <input type="text" />
              </div>
              <div>
                <label className='labels'>Numero de Telephone</label>
              </div>
              <div>
                <input type="text" />
              </div>
              <div>
                <label className='labels'>Adresse Mail</label>
              </div>
              <div>
                <input type="text" />
              </div>
              <div>
                <label className='labels' id='Sexe'>Sexe</label>
              </div>
              <div>
                <label for="masculin" >M</label>
                <input type="radio" id='masculin' name='radio' style={{ cursor: 'pointer' }} />
                <label for="masculin" >F</label>
                <input type="radio" id='masculin' name='radio' style={{ cursor: 'pointer' }} />
              </div>

              <div>
                <Button variant='contained' className='envoyer' sx={{ marginTop: "15px", borderRadius: '25px' }}>Envoyer</Button>
              </div>
            </form>
          </div>
        
          <div className='cargrid'>
            <Container> 
            <img src={bug} style={{ height: '500px', width: '800px' }}></img>
            </Container>
          </div>
        </div>

        {/* </Box> */}
      </Container>

      <Container sx={{ marginTop: '10rem', fontFamily: "sansSerif", fontSize: '3rem', display: 'flex' }}>

        <Box>
          Travaille pour toutes ces <br />
          <span style={{ color: 'blue' }}>Marques et Clients</span><br />
          <Button variant='contained' >Embauches moi</Button>
        </Box>

        <Box sx={{ fontSize: '18px', marginLeft: '8rem', height: '500px', width: '500px' }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam necessitatibus voluptatibus possimus voluptates nihil, ducimus maiores ea est modi, qui explicabo doloremque, quod obcaecati natus nam dicta in culpa veritatis.
        </Box>

      </Container>


      <Container>

      <Carrousselimage/>

      </Container>



    </div >
  )
}

export default Menu