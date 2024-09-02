import './App.css';
import Navbar from './component/Navbar';
import computerimg from './component/assets/computerimg.svg'
import secondimg from './component/assets/secondimg.svg'
import bookicon from './component/assets/bookicon.svg'
import girlimg from './component/assets/girlimg.svg'
import mobileimg from './component/assets/mobileimg.svg'
import girlimg2 from './component/assets/girlimg2.svg'
import Priceimg from './component/assets/Priceimg.svg'
function App(){
  return (
    <div>
<Navbar/>
<div  className=" container section1">
<div className="paraNbtn">
    <h2>Introduce your product Quickly & Effectively</h2>
    <div className='para'>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p></div>
<div className='twobtn'>
<button type="button" class="btn btn-secondary" style={{width:"189.13px",height:"36.43px", background:"rgb(17,27,71)"}}>Purchase UI Kit</button>
<button type="button" class="btn btn-light" style={{width:"189.13px",height:"36.43px", color:"rgb(17,27,71)", borderColor:"rgb(17,27,71)"}}>Learn More</button>
</div>

   </div>
   <div className="computerimg">
    <img src={computerimg}/>
   </div>
</div>
 <div  className=" container section2"> 
  <div className="pnb">
    <div className="paraNcontent">
    <h2>Light, Fast & Powerful</h2>
    <div className='para'>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p></div>
   </div>
   <div className='bookicon'>
  <div>
<img src={bookicon} style={{width:"36px", height:"36px"}} />
<h3>Title Goes Here</h3>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
</div>

  <div>
<img src={bookicon} style={{width:"36px", height:"36px"}} />
<h3>Title Goes Here</h3>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
</div>
</div>
   </div>
    <div className="secondimg">
    <img src={secondimg}/>
   </div>
</div>
<div className="container section3">
  <div className="girlimg">
    <img src={girlimg}className='w-100' />
  </div>
 <div className="paraNcontent2">
  <h3>Light, Fast & Powerful</h3>
  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>

 </div>
</div>
<div className="container section4">
  <div className="mobileimg">
    <img src={mobileimg}className='w-100' />
  </div>
 <div className="paraNcontent3">
  <h3>Light, Fast & Powerful</h3>
  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>

 </div>
</div>
<div className="container section5">
  <div className="girlimg2">
    <img src={girlimg2}className='w-100' />
  </div>
 <div className="paraNcontent4">
  <h3>Light, Fast & Powerful</h3>
  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
  <button type="button" class="btn btn-secondary" style={{width:"189.13px",height:"36.43px", background:"rgb(17,27,71)"}} >Purchase Now</button>
 </div>
</div>
<div className=" section6">
 <div className=" container paraNcontent5">
  <h3>A Price To Suit Everyone</h3>
  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
<div className="price"><h2 >$40 <br /></h2><span>UI Design Kit</span></div>
  
    <span>See, One price. Simple.</span>
    <div className='lastbtn'> 
    <button type="button" class="btn btn-secondary" style={{width:"189.13px",height:"36.43px", background:"rgb(17,27,71)"}}>Purchase Now</button>
    </div>


  

 </div>
</div>
</div>      
  );
}

export default App;
