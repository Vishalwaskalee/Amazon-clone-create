import React from 'react'
// import Carousel from 'react-bootstrap/Carousel'
// import '../elements/Slider.css'
import '../Styles/Slide.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Slide = () => {
  return (
    <div>
        <div div className='item' data-bs-interval="1000">
            <div className='items'>  
               <div className='div-item'>
               <span>
               <h5>cooking aplliances</h5>
                    <img src='/images/c1.jpg' alt=''></img>
                </span>
                <span>
                <h5>cooking aplliances</h5>
                    <img src='/images/c2.jpg' alt=''></img>
                </span>
                <span>
                <h5>cooking aplliances</h5>
                    <img src='/images/c3.jpg' alt=''></img>
                </span >
                <span>
                <h5>cooking aplliances</h5>
                    <img src='/images/c4.jpg' alt=''></img>
                </span>
               </div>
            </div >
            <div>
               <div className='div-item1'>
               <span >
               <h5>Electronics</h5>
                    <img src='/images/c5.jpg' alt=''></img>
                </span>
                <span>
                <h5>Refrigerator</h5>
                    <img src='/images/c16.jpg' alt=''></img>
                </span>
                <span>
                <h5 id='headphone'>Headphones</h5>
                    <img src='/images/c8.jpg' alt=''></img>
                </span >
                <span>
                <h5>Mobile</h5>
                    <img src='/images/c15.jpg' alt=''></img>
                </span>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Slide
