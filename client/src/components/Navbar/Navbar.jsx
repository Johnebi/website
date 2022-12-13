

import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../logo/overflowlogo.png"
import search from "../../logo/searchicon.svg"
import Avatar from '../../components/Avatar/Avatar'

import "../Navbar/Navbar.css"


function Navbar() {

var Users= null;
  return (
   <nav className='main-nav'>
    <div className='navbar'>
<Link to='/' className='nav-item nav-logo'><img width={180} src={logo} alt="logo"/></Link>
<Link to='/' className='nav-item nav-btn'>About Us</Link>
<Link to='/' className='nav-item nav-btn'>Product</Link>
<Link to='/' className='nav-item nav-btn'>For Teams</Link>
<form>
    <input placeholder='Search...' type='text'/>
 <img src={search} alt="searchicon" width={16} className='search-icon' />
</form>
{Users===null ? <Link to='/Auth' className='nav-item nav-links'>Log in</Link> : <div> <Avatar backgroundColor='#009dff' display='inline-block' padding='15px 20px' position='absolute' margin-right='9px' borderRadius='49%' ><Link to='/User' style={{ color:'white',textDecoration:'none'}}>J</Link></Avatar>
<button className='nav-item nav-links'>Log Out</button> </div>}
    </div>
   </nav>
  )
}

export default Navbar