import React from 'react';
import {
   Link
  } from "react-router-dom";
let Header = () => {
    return(
        <>
        <div>
            <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to='/about'>About</Link></li> 
            <li><Link to="/profile">Profile</Link></li>
            </ul>
        </div>
        </>
   )
    }
    
    export default Header;