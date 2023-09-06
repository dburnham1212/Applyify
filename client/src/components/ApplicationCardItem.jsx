import { Link } from "react-router-dom";

// CSS
import "../stylesheets/dashboard.css"

function ApplicationCardItem(props) {

  return(
    <div  className="max-w-sm rounded overflow-hidden shadow-lg bg-secondary">
      <div className="card border-dark bg-light p-2">
        <h6>Title</h6>
        <p>{props.position}</p>
        <h6>Company</h6>
        <p>{props.company}</p>
        <h6>Date Applied</h6>
        <p>{props.dateApplied}</p>
        <div className="flex justify-end">
          <td>
            <Link className="btn btn-primary" to={`/viewApplication/${props.id}`}>View</Link>
          </td>
        </div>
      </div>
    </div>
  )
}

export default ApplicationCardItem;