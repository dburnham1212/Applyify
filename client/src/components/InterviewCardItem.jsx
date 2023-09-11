import { Link } from "react-router-dom";

// CSS
import "../stylesheets/dashboard.css"

function InterviewCardItem(props) {

  return(
    <div className="w-full rounded overflow-hidden shadow-lg bg-secondary border-2">
      <h1 className="font-bold text-xl text-center my-2">Interview</h1>
      <div className="card-body">
        <h6 className="font-bold">Date Of Interview</h6>
        <p>{props.dateOfInterview}</p>
        <h6 className="font-bold">Interviewer</h6>
        <p>{props.interviewer}</p>
        <h6 className="font-bold">Thank you note sent?</h6>
        <p>{props.thankYouSent ? "Yes" : "No"}</p>
        <h6 className="font-bold">Date Sent</h6>
        <p>{props.dateSent}</p>
        <div className="flex justify-end gap-2">
          <Link className="btn btn-dark" to={`/viewApplication/${props.id}`}>Edit</Link>
          <button className="btn btn-warning">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default InterviewCardItem;