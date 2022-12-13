import React from 'react'
import "../../components/LeftSidebar/LeftSidebar.css"
import { NavLink } from 'react-router-dom'
import  Globe from '../../logo/global.svg'
import '../LeftSidebar/LeftSidebar.css'


const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <NavLink to='/' className='side-nav-links' activeclassname='active' style={{paddingLeft:'9px'}}><p>Home</p></NavLink>

<div className='left-side-nav'>
  <div><p style={{paddingLeft:"9px"}}>PUBLIC</p></div>
  <NavLink to='/Questions' activeclassname='active' className="side-nav-links">
    <img style={{height:'15px' }}src={Globe} alt="Globe" />
    <p style={{marginLeft:"5px"}} >Questions</p>
  </NavLink>
  <NavLink to='/Tags' className='side-nav-links' activeclassname='active' style={{paddingLeft:'30px'}}><p>Tags</p></NavLink>
  <NavLink to='/Users' className='side-nav-links'  activeclassname='active' style={{paddingLeft:'30px'}}><p>Users</p></NavLink>

</div>
      </nav>
      
     </div>
  )
}

export default LeftSidebar