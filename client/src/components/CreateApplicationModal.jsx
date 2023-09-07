import React from "react";

const CreateApplicationModal = (props) => {
  return (
    <div>
      <div className="top-0 fixed h-screen w-screen bg-gray-900 z-10 opacity-80">   
      </div>
      <div className="fixed top-24 rounded border-2 bg-secondary w-11/12 inset-x-0 m-auto z-20">
        <div className="text-3xl font-bold text-center my-5">
          <h1>New Application</h1>
        </div>
        <div className="card-body">
          <h1 className="font-bold">Company</h1>
          <input 
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" 
          />
          <h1 className="font-bold">Position</h1>
          <input 
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" 
          />
          <h1 className="font-bold">Link</h1>
          <input 
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" 
          />
          <h1 className="font-bold">Date Found</h1>
          <input 
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" 
          />
          <h1 className="font-bold">Date Applied</h1>
          <input 
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" 
          />
          <h1 className="font-bold">Research Done</h1>
          <input type="checkbox"/>
          <h1 className="font-bold">LinkedIn Connection</h1>
          <input type="checkbox"/>
          <div className="flex justify-end gap-2">
            <button className="btn btn-dark">Create</button>
            <button className="btn btn-warning" onClick={() => props.setView(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateApplicationModal;