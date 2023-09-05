import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext, useEffect } from 'react';

// CSS
import "./stylesheets/main.css"

// Import components
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import ViewApplication from "./components/ViewApplication";
import { themeChange } from "theme-change";
// Import context provider data
import { authContext } from './providers/AuthProvider';

function App() {
  const {
    authenticated,
    // themes
  } = useContext(authContext)

  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ]

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  return (
    <div className="main__background">
      <BrowserRouter>
        <NavBar themes={themes}/>
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
