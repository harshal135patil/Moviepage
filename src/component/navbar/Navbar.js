import React from 'react'
import "./navbar.css"
import {MdOutlineSettings} from "react-icons/md"
import {BiBell} from "react-icons/bi"
import profile from "../../image/profile.png"

function Navbar() {
  return (
    <div className='navbar'>
        <h2 className='heading'>moviebox</h2>
        <div className='navlinks'>
      <ul>
        
        <li>Overview</li>
        <li style={{color:"white"}}>Movies</li>
        <li>Reporting</li>
        <li>Users</li>
      </ul>
      <ul className='profileicons'>
        
        <li><MdOutlineSettings /></li>
        <li style={{color:"white"}} ><BiBell /></li>
        <li><img src={profile} alt="" height="30px" width="30px"/></li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
