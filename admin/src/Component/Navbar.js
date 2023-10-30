import React from 'react'
import  '../Styles/Navbar.css'
function Navbar() {
  return (
    <>
    <nav>
       <div className='logo'><img src="logo1.png" alt="vishao" id='logo' height={35} />.in</div> 
        
      <div className='hello'> <sup><h6>Hello</h6></sup>
      <h4 id='address'>Select Your Address</h4></div>
       <div id='item'><select name="amazon" id="amazon"> 
       <option value="1"type="circle  ">All</option>
       <option value="2">Amazon Fashion</option>
       <option value="3">Amazon Device</option>
       <option value="4">App&games</option>
       <option value="5">Devices</option>
       <option value="6"></option>
       </select>
       <input type="text"id='input'  placeholder='Search Amazon.in'/><i id='search' class="fa fa-search"></i>
       </div>
      <div className='flag'><img src="indian.avif" alt=""  height={20}/>
      <select name="amazon" id="language"> 
       <option value="1" >En</option>
       <option value="2" checkbox>Hn - Hindi</option>
       </select>
       </div>
       <div className='sign-in'>
       <sup><strong>Hello,sign in</strong></sup>
       <h6>Account & Lists</h6>
       <select name="account" id="account"><option value=""></option>
       <option value="">..</option><option value="">..</option>
       </select></div>
<div className='order'><sup>Returns</sup>
<h2><b>& Orders</b></h2></div>
<div id='cart'>
<i className="fas   fa-cart-plus" id='cart'></i>
  <span>Cart</span>
</div>
    </nav>
    
    </>
  )
}

export default Navbar