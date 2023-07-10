import React from 'react'
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min'

const Navbar = () => {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
        <NavLink to="/auth" className="nav-item nav-link active">home</NavLink>
        <NavLink to="/" className="nav-item nav-link active" >Login</NavLink>
            <NavLink to="/register" className="nav-item nav-link active" > Register  </NavLink>
            
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
