import React from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './composants/Navbar';
import Footer from './composants/Footer';
import Menu from './composants/Menu';
import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SecondPage from './Second page'
import Moi from './composants/About/Moi';
import Bouton from './composants/Bouton';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* <Route path='Moi' element={<Moi />} /> */}
          <Route path="/SecondPage" element={<SecondPage />} />
        </Routes>
        <>  

          <Menu />
        </>
        
         


      <Footer />
      </BrowserRouter>
    </div>
  )
}


export default App;
