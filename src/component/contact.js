import React from 'react';

const contact = () => {
  return (
    <div className="contactform ">
      <h3>Contact With Us</h3 >
      <p>Fill up the form correctly !</p>
      <form >
      <div className="form ">
       <label htmlFor="Name" className="form-label">Your Name</label>
   <input type="name" className="form-control mb-3" id="name" name="name" />
       <label htmlFor="Email" className="form-label ">Your Email Id</label>
   <input type="email" className="form-control mb-3" id="email" name="email" />
       <label htmlFor="Mobile Number" className="form-label">Your Mobile Number</label>
   <input type="mobile number" className="form-control mb-3" id="mobile number" name="mobile number" />
      </div>
      <button type="submit" className="btn btn-dark subbtn mt-2">Submit</button>
   </form>  
    </div>
  );
}

export default contact;
