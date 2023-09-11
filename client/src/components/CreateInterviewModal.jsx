import React from "react";

const createInterview = () => {

}

const CreateInterviewModal = (props) => {
  return(
    <div>
      <div className="top-0 fixed h-screen w-screen bg-gray-900 z-10 opacity-80">   
      </div>
      <div className="fixed top-24 rounded border-2 bg-secondary w-11/12 inset-x-0 m-auto z-20">
        <h1 className="text-3xl font-bold text-center my-3">New Interview</h1>
        <div className="card-body">
          <h1 className="font-bold">Date Of Interview</h1>
          <input 
            className="bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary "
            type="date"
          />
          <h1 className="font-bold">Interviewer</h1>
          <input 
            className="bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary "
            placeholder="Interviewer Name"
          />
          <div>
            <h1 className="font-bold">Thank You Note Sent</h1>
            <input 
              type="checkbox"
            />
          </div>
          <h1 className="font-bold">Date Sent</h1> 
          <input 
            className="bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary "
            type="date"
          />
          <div className="flex justify-end gap-2">
            <button className="btn btn-dark" >Create</button>
            <button className="btn btn-warning" onClick={() => props.setView(false)}>Cancel</button>
          </div>
        </div>
       
      </div>
      
    </div>
  )
}

export default CreateInterviewModal;