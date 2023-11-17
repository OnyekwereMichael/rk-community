import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='name'>
        {/* <div>
      <a href="/">Home</a>
        </div>
   
   <div>
   <a href="/Scheme">Scheme</a>
   </div>
   
   <div>
   <a href="/Naga">Naga</a>
   </div> */}

<div>

  
   <NavLink to="/" className="red">Website</NavLink>
 
   </div>

<div>
   <NavLink to="/Home" className="red">Home</NavLink>
   </div>

<div>
   <NavLink to="/Scheme" className="red">Scheme</NavLink>
   </div>

<div>
   <NavLink to="/Naga" className="red">Naga</NavLink>
   </div>
   



    </div>
  )
}

export default Navbar
