import React from 'react';

import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
function Header() {
  return (
    <div>
 <Link to="/"></Link>

        <Navbar/>
      
        <div className='name'>  
            <h1><span> Join us NOW </span> You will thanks us  </h1>
        </div>
    </div>
   
  )
}

export default Header;