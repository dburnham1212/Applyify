import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../providers/AuthProvider";

const NavBar = (props) => {
  
  const {
    authenticated,
    user,
    onLogout
  } = useContext(authContext);

  return(
    <nav className="navbar navbar-expand-md navbar-light fixed-top bg-secondary py-4">
      <div className="container-fluid">
      <select className="bg-indigo-100 px-2 py-3 text-gray-500"
            data-choose-theme >
        <option value="">Default themes</option>
        {props.themes.map((value) => (
          <option key={value.toLowerCase()} value={value.toLowerCase()}>{value}</option>
        ))}
      </select>

        <a className="navbar-brand text-light px-4" href="#">Applyify</a>
        <button 
          className="navbar-toggler bg-light mx-4" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mx-4" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <Link className="nav-link text-light" to="/">Home</Link>
            </li>
            <li className="nav-item text-light">
                <Link className="nav-link text-light" to="/dashboard">Dashboard</Link>
             </li>
          </ul>
          {authenticated ? 
          <ul className="navbar-nav d-flex justify-content-end">
            <li className="nav-item">
              <span className="nav-link text-light"> Logged in as: {user.user_name}</span>
            </li>
            <li className="nav-item">
              <span className="nav-link text-light" onClick={() => onLogout()} style={{cursor: "pointer"}}>Logout</span>
            </li>
          </ul>
          :
          <ul className="navbar-nav d-flex justify-content-end">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/register">Register</Link>
            </li>
          </ul>
          }
        </div>
      </div>
    </nav>
  )
}

export default NavBar;