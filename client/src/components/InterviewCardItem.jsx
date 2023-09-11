import { Link } from "react-router-dom";

function InterviewCardItem(props) {

  return(
    <div className="w-full rounded overflow-hidden shadow-lg bg-secondary border-2">
      <h1 className="font-bold text-xl text-center my-2 bg-secondary text-secondary-content">Interview</h1>
      <div className="card-body">
        <h6 className="font-bold text-secondary-content">Date Of Interview</h6>
        <p className="text-secondary-content">{props.dateOfInterview}</p>
        <h6 className="font-bold text-secondary-content">Interviewer</h6>
        <p className="text-secondary-content">{props.interviewer}</p>
        <h6 className="font-bold text-secondary-content">Thank you note sent?</h6>
        <p className="text-secondary-content">{props.thankYouSent ? "Yes" : "No"}</p>
        <h6 className="font-bold text-secondary-content">Date Sent</h6>
        <p className="text-secondary-content">{props.dateSent}</p>
        <div className="flex justify-end gap-2">
          <Link className="btn btn-dark" to={`/viewApplication/${props.id}`}>Edit</Link>
          <button className="btn btn-error">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default InterviewCardItem;