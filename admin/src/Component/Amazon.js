import React from 'react'
import Navbar from './Navbar'
import Navbar1 from './Header'
import '../Styles/Amazon.css'
import { Route,Routes } from 'react-router-dom'
import Content from './Content'
import Slide from './Slide'
import Footer from './Footer'
function Amazon() {
  return (
    <>
    <div>
      <Navbar/>
      <Navbar1/>
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner" id='sell'>
    <div class="carousel-item active" data-bs-interval="1000">
      <img src="images/sellposter.jpg" class="d-block w-100" alt="..." className='sell'/>
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src="images/sellposter2.jpg" class="d-block w-100" alt="..."  className='sell'/>
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src="images/sellposter3.jpg" class="d-block w-100 " alt="error" className='sell'/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<Content/>
<Slide/>
<Footer/>
    </div>
    </>
  )
}

export default Amazon