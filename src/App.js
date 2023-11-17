
  import './App.css';
  import Home from './Home';
  import Scheme from './Scheme';
  import Naga from './Naga';
  import Navbar from './Navbar'
  import Employee from './employee';
  import content from './content'
  import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
  
// import 'swiper/css/navigation';

// import './styles.css';


  import { useState } from "react";

  function App() {
 

    return (
  
      <div className="App"> 
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element={<Home/>}/> 
          <Route path = "/Home" element={<Home/>}/> 
          <Route path = "/Scheme" element={<Scheme />}/> 
          <Route path = "/Naga" element={<Naga />}/> 
          <Route path = "*" element={"PAGE NOT FOUND"}/> 
          

      </Routes>
      </Router>

     
  
  </div>

  
  );



}

export default App;



