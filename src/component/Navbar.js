import React from 'react';

const Navbar = () => {
  return (
   <div className=" container navbar">
    <div className="d-flex gap-4">
    <span>Home</span>
    <span>About</span>
    <span>Contact</span>
    </div>

   

    <div className=""> 
    <button type="button" className="btn btn-dark">Buy Now</button>
   </div>

   

   </div>
  );
}

export default Navbar;
