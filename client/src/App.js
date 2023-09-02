import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from 'react';

//Import components
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

//Import context provider data
import { authContext } from './providers/AuthProvider';

function App() {
  const {
    authenticated
  } = useContext(authContext)

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* Home Page*/}
          <Route path="/" element={<Home/>}/>
          {/* Login Page */}
          <Route path="login" element={authenticated ? <Home/> : <Login/>}/>
          {/* Register Page */}
          <Route path="register" element={authenticated ? <Home/> : <Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
