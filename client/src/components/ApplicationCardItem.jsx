import { Link } from "react-router-dom";

// CSS
import "../stylesheets/dashboard.css"

function ApplicationCardItem(props) {

  return(
    <div  className="col-12 col-sm-6 col-md-6 col-lg-4">
      <div className="card border-dark p-2">
        <h6>Title</h6>
        <p>{props.position}</p>
        <h6>Company</h6>
        <p>{props.company}</p>
        <h6>Date Applied</h6>
        <p>{props.dateApplied}</p>
        <div className="d-flex justify-content-between">
          <td>
            <Link className="btn btn-primary" to={`/viewApplication/${props.id}`}>View</Link>
          </td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </div>
      </div>
    </div>
  )
}

export default ApplicationCardItem;