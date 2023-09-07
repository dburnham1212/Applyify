import { Link } from "react-router-dom";

// CSS
import "../stylesheets/dashboard.css"

function ApplicationCardItem(props) {

  return(
    <div className="w-full rounded overflow-hidden shadow-lg bg-secondary border-2 p-2">
      <h6 className="font-bold">Title</h6>
      <p>{props.position}</p>
      <h6 className="font-bold">Company</h6>
      <p>{props.company}</p>
      <h6 className="font-bold">Date Found</h6>
      <p>{props.dateApplied}</p>
      <div className="flex justify-end">
        <td>
          <Link className="btn btn-dark" to={`/viewApplication/${props.id}`}>View</Link>
        </td>
      </div>
    </div>
  )
}

export default ApplicationCardItem;