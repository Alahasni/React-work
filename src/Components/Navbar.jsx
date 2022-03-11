import React,{useState} from 'react';
import logo from '../images/logo.png';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';


 
function Navbar () {

    const [nav,setnav] = useState(false);
    const changeBackground = ()=>{
        if(window.scrollY >=50){
          setnav = true
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll',changeBackground);
  return (
    <>
    <nav   href='#' className={nav ? 'nav active' : 'nav'}>
        <a href='#' className='logo'>
<img src={logo} alt=''/>

        </a>
<input type='checkbox' className='menu-btn' id='menu-btn'></input>
  <label className='menu-icon' htmlFor='menu-btn'>
      <span className='nav-icon'></span>
  </label>
  <ul className='menu'>

  <li> <Link to="/Home">Home</Link></li>
  <li> <Link to="/About"> About us</Link></li>
  <li> <Link to="/login"> Sign in</Link></li>
      <li> <Link to="/Register">Sign up</Link></li>
     
     

     

  </ul>
    </nav>
    
    
    
    </>
    
  )
};

export default Navbar;