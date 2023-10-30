import React from 'react'
import  '../Styles/Header.css'
// import All from './All'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
function Navbar1() {
  return (
    
    <>
   <div>
    <header>
                <ul className='header'>
                  <i class ="fas fa-home"></i>
                <li className='bord'><Link className='nav-link'>All </Link></li >
                <li className='bord'><Link className='nav-link'>Television </Link></li >
                {/* <select name="" id="television">
                  <option value=""></option>
                  <option value="">Hp</option>
                  <option value="">Dell</option>
                  <option value="">sony</option>
                  </select> */}

                <li className='bord'><Link className='nav-link'>sell </Link></li >
                <li className='bord'><Link className='nav-link'>best seller </Link></li>
                <li className='bord'><Link className='nav-link'>deal</Link></li>
                <li className='bord'><Link className='nav-link'>item</Link></li>
                <li className='bord'><Link className='nav-link'>product</Link></li>
                <li className='bord'><Link className='nav-link '>image</Link></li >
                <li className='bord'><Link className='nav-link '>food</Link></li>
                <li className='bord'><Link className='nav-link '>groccery</Link></li>
                <li className='bord'><Link className='nav-link'>crocary</Link></li>
                <li className='bord'><Link className='nav-link '>releases</Link></li>
                </ul>
            <div className='lamp'>
                <img src='images/navimg.jpg' alt=''/>
            </div>
    </header>
   </div>
    </>
  )
}

export default Navbar1