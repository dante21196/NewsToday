
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Navbar extends Component {
  const 
  
  render() {
       
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="mx-3 navbar-brand mx-2" to='/' >NewsToday</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="mx-3 nav-link" to="/" >Home</Link>
      </li>
      <li className="nav-item">
        <Link className="mx-3 nav-link" to="/" >About NewsToday</Link>
      </li>
      
        <li className="nav-item active">
        <Link className="mx-3 nav-link" to="/business" >Business</Link>
      </li>
      <li className="nav-item active">
        <Link className="mx-3 nav-link" to="/entertainment" >Entertainment</Link>
      </li>
      <li className="nav-item active">
        <Link className="mx-3 nav-link" to="/health" >Health</Link>
      </li>
      <li className="nav-item active">
        <Link className="mx-3 nav-link" to="/general" >General</Link>
      </li>
      <li className="nav-item active">
        <Link className="mx-3 nav-link" to="/science" >Science</Link>
      </li>
      <li className="nav-item active">
        <Link className="mx-3 nav-link" to="/sports" >Sports</Link>
      </li>
    </ul>
   
  </div>
</nav>
    )
  }
}

