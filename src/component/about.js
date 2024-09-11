import React from 'react';
import aboutimg from './assets/aboutimg.svg'
import bookicon from './assets/bookicon.svg'

const About = () => {
  return (
    <div>
     <div className="container page1">
      <div className='abtimg'>
    <img src={aboutimg}alt="About"/>
      </div>
      <div className="pNl">
      <div className="paraNlogo">
     
    <div className='bookicon'>
  <div>
<img src={bookicon}alt='book' style={{width:"27px", height:"27px"}} />
<h4>Title Goes Here</h4>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
</div>

  <div>
<img src={bookicon}alt='novel' style={{width:"27px", height:"27px"}} />
<h4>Title Goes Here</h4>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
</div>
</div>
    <div className='bookicon'>
  <div>
<img src={bookicon}alt='book' style={{width:"27px", height:"27px"}} />
<h4>Title Goes Here</h4>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
</div>

  <div>
<img src={bookicon}alt='novel' style={{width:"27px", height:"27px"}} />
<h4>Title Goes Here</h4>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
</div>
</div>

  
   </div>
      </div>
  
      </div>
     </div>
  );
}

export default About;
