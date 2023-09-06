import React, { useContext }from "react";
import { authContext } from "../providers/AuthProvider";

const Login = () => {
  const {
    setUserName,
    setPassword,
    onLogin
  } = useContext(authContext);
 
  return(
    <div className="flex justify-center pt-6">
      <div className="w-5/6 sm:w-3/4 md:w-2/3 lg:w-1/2 block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-secondary dark:bg-neutral-700" >
        <div className="flex justify-center mx-2 my-4 text-3xl">
          <h2>Login</h2>
        </div>
        <form className="px-3">
          <div className="form-group pt-4">
            <label className="form-label">Username</label>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" type="text" onChange={(e) => setUserName(e.target.value)} placeholder="username"></input>
            
          </div>
          <div className="form-group pt-4">
            <label className="form-label">Password</label>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password"></input>
          </div>
          <div className="flex justify-center mx-2 my-4">
            <button className="btn btn-dark" onClick={(e) => onLogin(e)}>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;