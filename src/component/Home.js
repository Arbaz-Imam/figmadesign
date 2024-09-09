
import computerimg from './assets/computerimg.svg'
import secondimg from './assets/secondimg.svg'
import bookicon from './assets/bookicon.svg'
import girlimg from './assets/girlimg.svg'
import mobileimg from './assets/mobileimg.svg'
import girlimg2 from './assets/girlimg2.svg'
function Home(){
  return (
    <div>
<div  className=" container section1">
<div className="paraNbtn1">
    <h2>Introduce your product Quickly & Effectively</h2>
    <div className='para'>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p></div>
<div className='twobtn'>
<button type="button" className="btn btn-secondary" style={{width:"189.13px",height:"36.43px", background:"rgb(17,27,71)"}}>Purchase UI Kit</button>
<button type="button" className="btn btn-light" style={{width:"189.13px",height:"36.43px", color:"rgb(17,27,71)", borderColor:"rgb(17,27,71)"}}>Learn More</button>
</div>

   </div>
   <div className="computerimg">
    <img src={computerimg} alt='Description of the image'/>
   </div>
</div>
 <div  className=" container section2"> 
  <div className="pnb">
    <div className="paraNcontent2">
    <h2>Light, Fast & Powerful</h2>
    <div className='para'>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p></div>
   </div>
   <div className='bookicon'>
  <div>
<img src={bookicon} alt='Description of the image' style={{width:"36px", height:"36px"}} />
<h3>Title Goes Here</h3>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
</div>

  <div>
<img src={bookicon} alt='Description of the image'
style={{width:"36px", height:"36px"}} />
<h3>Title Goes Here</h3>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
</div>
</div>
   </div>
    <div className="secondimg">
    <img src={secondimg} alt='Description of the image'/>
   </div>
</div>
<div className="container section3">
  <div className="girlimg">
    <img src={girlimg} alt='Description of the image'className='w-100' />
  </div>
 <div className="paraNcontent3">
  <h3>Light, Fast & Powerful</h3>
  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>

 </div>
</div>
<div className="container section4">
  <div className="mobileimg">
    <img src={mobileimg} alt='Description of the image'className='w-100' />
  </div>
 <div className="paraNcontent4">
  <h3>Light, Fast & Powerful</h3>
  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>

 </div>
</div>
<div className="container section5">
  <div className="girlimg2">
    <img src={girlimg2} alt='Description of the image'className='w-100' />
  </div>
 <div className="paraNcontent5">
  <h3>Light, Fast & Powerful</h3>
  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
  <button type="button" className="btn btn-secondary" style={{width:"189.13px",height:"36.43px", background:"rgb(17,27,71)"}} >Purchase Now</button>
 </div>
</div>
<div className=" section6">
 <div className=" container paraNcontent6">
  <h3>A Price To Suit Everyone</h3>
  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
<div className="price"><h2 >$40 <br /></h2><span>UI Design Kit</span></div>
  
    <span>See, One price. Simple.</span>
    <div className='lastbtn'> 
    <button type="button" className="btn btn-secondary" style={{width:"189.13px",height:"36.43px", background:"rgb(17,27,71)"}}>Purchase Now</button>
    </div>


  

 </div>
</div>
</div>      
  );
}

export default Home ;
