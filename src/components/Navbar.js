
import React from 'react'


  const Navbar = ()=>{ 
  
  
       
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="mx-1 navbar-brand mx-2" href='#' >NewsToday</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="mx-1 nav-link" href="#" >Home</a>
      </li>
      <li className="nav-item">
        <a className="mx-1 nav-link" href="#" >About NewsToday</a>
      </li>
      
        <li className="nav-item active">
        <a className="mx-1 nav-link" href="#" >Business</a>
      </li>
      <li className="nav-item active">
        <a className="mx-1 nav-link" href="#" >Entertainment</a>
      </li>
      <li className="nav-item active">
        <a className="mx-1 nav-link" href="#" >Health</a>
      </li>
      <li className="nav-item active">
        <a className="mx-1 nav-link" href="#" >General</a>
      </li>
      <li className="nav-item active">
        <a className="mx-1 nav-link" href="#" >Science</a>
      </li>
      <li className="nav-item active">
        <a className="mx-1 nav-link" href="#" >Sports</a>
      </li>
    </ul>
   
  </div>
</nav>
    )
  }


  export default Navbar;

