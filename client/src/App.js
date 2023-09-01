import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import components
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* Home Page*/}
          <Route path="/" element={<Home />} />
          {/* Login Page */}
          <Route path="login" element={<Login />} />
          {/* Register Page */}
          <Route path="register" element={<Register />} />
          {/* Dashboard Page */}
          <Route path="Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
