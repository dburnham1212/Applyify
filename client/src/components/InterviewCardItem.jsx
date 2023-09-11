import { Link } from "react-router-dom";

// CSS
import "../stylesheets/dashboard.css"

function InterviewCardItem(props) {

  return(
    <div className="w-full rounded overflow-hidden shadow-lg bg-secondary border-2 p-2">
      <h1 className="font-bold text-xl text-center">Interview</h1>
      <h6 className="font-bold">Date Of Interview</h6>
      <p>{props.position}</p>
      <h6 className="font-bold">Interviewer</h6>
      <p>{props.company}</p>
      <h6 className="font-bold">Thank you not sent?</h6>
      <p>{props.dateApplied}</p>
      <h6 className="font-bold">Date Sent</h6>
      <div className="flex justify-end">
        <td>
          <Link className="btn btn-dark" to={`/viewApplication/${props.id}`}>Edit</Link>
        </td>
      </div>
    </div>
  )
}

export default InterviewCardItem;