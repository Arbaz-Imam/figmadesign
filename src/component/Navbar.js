import React from 'react';
import { Link , useLocation} from "react-router-dom"; 

const Navbar = () => {
  const location=useLocation()
  return (
   <div className=" container navbar">
    <div className="d-flex gap-4">
 
            <Link className={`nav-link ${location.pathname==="/Home"? "active":""}`} aria-current="page" to="/">Home</Link>
            <Link className={`nav-link ${location.pathname==="/about"? "active":""}`} to="/about">About</Link>
            <Link className={`nav-link ${location.pathname==="/contact"? "active":""}`} to="/contact">Contact</Link>
          
    </div>

   

    <div className=""> 
    <button type="button" className="btn btn-dark">Buy Now</button>
   </div>
    </div>
  );
}

export default Navbar;
