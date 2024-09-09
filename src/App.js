
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Navbar from './component/Navbar'
import About from './component/about'
import Home from  './component/Home'
import Contact from  './component/contact'


const App = () => {
  return (
    <>
    
    <Router>
   <Navbar/>
   <div className="container">
         <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact/>} />
          {/* <Route exact path="/signup" element={< Signup showAlert={showAlert}/>} /> */}
           </Routes>
           </div>
        </Router>
      
   </>
  );
}

export default App;
