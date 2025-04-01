import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav style={{backgroundColor:"#232f3e",gap:"30px",display:"flex"}}>

      
        
        
        <Link style={{color:"white",textDecoration:"none"}} to="/">Home </Link>
           
        <Link style={{color:"white",textDecoration:"none"}} to="/pr">Products </Link> 

       <Link style={{color:"white",textDecoration:"none"}} to="/mymember">Mymember</Link>


    </nav>
  );
};

export default Navbar;
