import React from 'react'
//import {FaCoins} from 'react-icons/fa'
import logo from "../components/logo.png";
import './Navbar.css'
import {Link} from 'react-router-dom'
//<FaCoins className='icon'/>
const Navbar =()=>{
    return (
        <Link to='/'>
        <div className='navbar'>
        
        <div className='icon'>
                <img src={logo} alt="Logo"/>        
            </div>
        <h1>Crypto <span className='mustard'>Updates</span></h1>
        </div>
        </Link>
    )
}
export default Navbar