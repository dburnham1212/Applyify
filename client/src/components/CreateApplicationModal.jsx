import axios from "axios";
import React, { useState, useContext } from "react";

import { authContext } from "../providers/AuthProvider";

const CreateApplicationModal = (props) => {
  // USER DATA FROM CONTEXT
  const {
    user
  } = useContext(authContext);
  
  // STATES
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [link, setLink] = useState("");
  const [dateFound, setDateFound] = useState(null);
  const [dateApplied, setDateApplied] = useState(null);
  const [researchDone, setResearchDone] = useState(false);
  const [linkedInConn, setLinkedInConn] = useState(false);

  const [missingRequired, setMissingRequired] = useState(false)

  const createApplication = () => {
    if(company && position && link && dateFound) {
      axios.post(`/applications/create/user/${user.id}`,
      {
        company,
        position,
        link,
        dateFound,
        dateApplied,
        researchDone,
        linkedInConn
      })
      .then((res) => {
        console.log(res.data)
        props.setView(false);
      }).catch((e) => {
        console.log(e)
      })
    } else {
      setMissingRequired(true);
    }
  }

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
            className={"bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary " 
              + ((missingRequired && !company) ? "border-red-700" : "border-gray-200")
            }
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <h1 className="font-bold">Position</h1>
          <input 
            className={"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary " 
              + ((missingRequired && !position) ? "border-red-700" : "border-gray-200")
            }
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <h1 className="font-bold">Link</h1>
          <input 
            className={"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary " 
              + ((missingRequired && !link) ? "border-red-700" : "border-gray-200")
            } 
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <h1 className="font-bold">Date Found</h1>
          <input 
            className={"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary " 
              + ((missingRequired && !dateFound) ? "border-red-700" : "border-gray-200")
            } 
            type="date"
            onChange={(e) => (setDateFound(e.target.value))}
          />
          <h1 className="font-bold">Date Applied</h1>
          <input 
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" 
            type="date"
            onChange={(e) => (setDateApplied(e.target.value))}
          />
          <h1 className="font-bold">Research Done</h1>
          <input 
            type="checkbox"
            onChange={(e) => (setResearchDone(e.target.checked))}
          />
          <h1 className="font-bold">LinkedIn Connection</h1>
          <input 
            type="checkbox"
            onChange={(e) => (setLinkedInConn(e.target.checked))}
          />
          {missingRequired && 
            <p className="text-center text-red-700 font-bold">Missing required fields</p>
          }
          <div className="flex justify-end gap-2">
            <button className="btn btn-dark" onClick={() => createApplication()}>Create</button>
            <button className="btn btn-warning" onClick={() => props.setView(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateApplicationModal;