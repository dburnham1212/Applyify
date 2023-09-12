import React, { useState } from "react";

import axios from "axios";


const CreateInterviewModal = (props) => {
  const [interviewDate, setInterviewDate] = useState(null);
  const [interviewer, setInterviewer] = useState("");

  const [missingRequired, setMissingRequired] = useState(false);

  const createInterview = () => {
    if(interviewDate && interviewer) {
      axios.post(`/interviews/application/${props.applicationId}`, {
        interviewDate,
        interviewer
      })
      .then((res) => {
        console.log(res);
        props.setView(false);
        props.setInterviews([res.data.interview, ...props.interviews])
      })
      .catch((e) => {
        console.log(e);
      })
    } else {
      setMissingRequired(true);
    }
  }

  return(
    <div>
      <div className="top-0 fixed h-screen w-screen bg-gray-900 z-10 opacity-80">   
      </div>
      <div className="fixed top-24 rounded border-2 bg-secondary w-11/12 inset-x-0 m-auto z-20">
        <h1 className="text-3xl font-bold text-center my-3 text-secondary-content">New Interview</h1>
        <div className="card-body">
          <h1 className="font-bold text-secondary-content">Date Of Interview</h1>
          <input 
            className={"bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary "
            + ((missingRequired && !interviewDate) ? "border-error" : "border-gray-200")}
            type="date"
            onChange={(e) => setInterviewDate(e.target.value)}
          />
          <h1 className="font-bold text-secondary-content">Interviewer</h1>
          <input 
            className={"bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary "
            + ((missingRequired && !interviewer) ? "border-error" : "border-gray-200")}
            placeholder="Interviewer Name"
            onChange={(e) => setInterviewer(e.target.value)}
          />
          <div>
            <h1 className="font-bold text-secondary-content">Thank You Note Sent</h1>
            <input 
              type="checkbox"
            />
          </div>
          <h1 className="font-bold text-secondary-content">Date Sent</h1> 
          <input 
            className="bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary "
            type="date"
          />
          {missingRequired && 
            <p className="font-bold text-error text-center">Missing Required Fields</p>
          }
          <div className="flex justify-end gap-2">
            <button className="btn btn-dark" onClick={() => {createInterview()}}>Create</button>
            <button className="btn btn-error" onClick={() => props.setView(false)}>Cancel</button>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default CreateInterviewModal;