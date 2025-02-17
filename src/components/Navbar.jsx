import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const Navbar = () => {
  return (
    <div>
       
         <nav class="navbar navbar-expand-lg" style={{backgroundColor:'red'}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active"  href="#"><Link style={{textDecoration:'none',color:'white'}} to={'/'}>Home</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link style={{textDecoration:'none',color:'white'}} to={'/about'}>About</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link style={{textDecoration:'none',color:'white'}} to={'/contact'}>Contact</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  href="#"><Link style={{textDecoration:'none',color:'white'}} to={'/qualification'}>Qualification</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  href="#"><Link style={{textDecoration:'none',color:'white'}} to={'/project'}>Project</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  href="#"><Link style={{textDecoration:'none',color:'white'}} to={'/resume'}>Resume</Link></a>
        </li>
        
      </ul>
    </div>
  </div>
</nav> 
    </div>
  )
}

export default Navbar