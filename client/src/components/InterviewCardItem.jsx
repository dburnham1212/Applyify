import axios from "axios";
import { useState } from "react";

function InterviewCardItem(props) {
  const [interviewDate, setInterviewDate] = useState(props.dateOfInterview);
  const [interviewer, setInterviewer] = useState(props.interviewer);
  const [thankYouSent, setThankYouSent] = useState(props.thankYouSent);
  const [dateSent, setDateSent] = useState(props.dateSent)

  const [editMode, setEditMode] = useState(false);

  const deleteInterview = () => {
    axios.post(`/interviews/delete/${props.id}`)
    .then((res) => {
      props.setInterviews([...props.interviews.filter((interview) => {return interview.id != props.id})])
      console.log(res)
    })
    .catch((e) => {
      console.log(e);
    })
  }

  return(
    <div className="w-full rounded overflow-hidden shadow-lg bg-secondary border-2">
      <h1 className="font-bold text-xl text-center my-2 bg-secondary text-secondary-content">Interview {props.interviewCount + 1}</h1>
      {editMode ? 
      <div className="card-body">
        <h6 className="font-bold text-secondary-content">Date Of Interview</h6>
        <input 
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" 
          type="date"
          value={interviewDate} 
          onChange={(e) => setInterviewDate(e.target.value)}
        />
        <h6 className="font-bold text-secondary-content">Interviewer</h6>
        <input 
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" 
          value={interviewer} 
          onChange={(e) => setInterviewer(e.target.value)}
        />
        <div>
          <h6 className="font-bold text-secondary-content">Thank you note sent?</h6>
          <input 
            type="checkbox" 
            checked={thankYouSent}
            onChange={(e) => (setThankYouSent(e.target.checked))}
          />
        </div>
        <h6 className="font-bold text-secondary-content">Date Sent</h6>
        <input 
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" 
          type="date"
          value={dateSent} 
          onChange={(e) => setDateSent(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button className="btn btn-dark" onClick={() => setEditMode(false)}>Save</button>
          <button className="btn btn-error" onClick={() => setEditMode(false)}>Cancel</button>
        </div>
      </div>
      :
      <div className="card-body">
        <h6 className="font-bold text-secondary-content">Date Of Interview</h6>
        <p className="text-secondary-content">{interviewDate}</p>
        <h6 className="font-bold text-secondary-content">Interviewer</h6>
        <p className="text-secondary-content">{interviewer}</p>
        <h6 className="font-bold text-secondary-content">Thank you note sent?</h6>
        <p className="text-secondary-content">{thankYouSent ? "Yes" : "No"}</p>
        <h6 className="font-bold text-secondary-content">Date Sent</h6>
        <p className="text-secondary-content">{dateSent}</p>
        <div className="flex justify-end gap-2">
          <button className="btn btn-dark" onClick={() => setEditMode(true)}>Edit</button>
          <button className="btn btn-error" onClick={() => deleteInterview()}>Delete</button>
        </div>
      </div>
      }
    </div>
  )
}

export default InterviewCardItem;