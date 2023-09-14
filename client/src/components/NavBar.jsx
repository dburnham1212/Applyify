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
    <nav className="fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 bg-secondary py-4">
      <div className="flex justify-between items-center px-4">
        <div className="flex justify-between items-center">
        
          <a className="font-bold text-3xl px-6 text-secondary-content" href="#">Applyify</a>
          <ul className="flex justify-between items-center gap-3">
            <li className="nav-item active">
              <Link className="text-secondary-content hover:text-primary" to="/">Home</Link>
            </li>
            <li className="nav-item ">
                <Link className="text-secondary-content hover:text-primary" to="/dashboard">Dashboard</Link>
             </li>
          </ul>
          <select className="bg-indigo-100 mx-4 px-2 py-3 text-gray-500"
                data-choose-theme >
            <option value="">Default themes</option>
            {props.themes.map((value) => (
              <option key={value.toLowerCase()} value={value.toLowerCase()}>{value}</option>
            ))}
          </select>
        </div>

        <div className="flex justify-between items-center" id="navbarNav">
          
          {authenticated ? 
          <ul className="flex justify-between items-center gap-3">
            <li className="nav-item">
              <span className="nav-link text-secondary-content"> Logged in as: {user.user_name}</span>
            </li>
            <li className="nav-item">
              <span className="text-secondary-content hover:text-primary" onClick={() => onLogout()} style={{cursor: "pointer"}}>Logout</span>
            </li>
          </ul>
          :
          <ul className="flex justify-between items-center gap-3 mx-2">
            <li className="nav-item">
              <Link className="text-light text-secondary-content hover:text-primary" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="text-light text-secondary-content hover:text-primary" to="/register">Register</Link>
            </li>
          </ul>
          }
        </div>
      </div>
    </nav>
  )
}

export default NavBar;