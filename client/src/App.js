import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from 'react';

// CSS
import "./stylesheets/main.css"

// Import components
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import ViewApplication from "./components/ViewApplication";

// Import context provider data
import { authContext } from './providers/AuthProvider';

function App() {
  const {
    authenticated
  } = useContext(authContext)

  return (
    <div className="main__background">
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* Home Page*/}
          <Route path="/" element={<Home/>}/>
          {/* Login Page */}
          <Route path="login" element={authenticated ? <Home /> : <Login />} />
          {/* Register Page */}
          <Route path="register" element={authenticated ? <Home /> : <Register />} />
          {/* Dashboard Page */}
          <Route path="dashboard" element={authenticated ? <Dashboard /> : <Login />} />
          {/* View Applications */}
          <Route path="viewApplication/:application_id" element={authenticated ? <ViewApplication /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
