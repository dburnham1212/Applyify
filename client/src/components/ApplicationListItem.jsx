import { Link } from "react-router-dom";


function ApplicationListItem(props) {

  return(
    <tr>
      <td>{props.dateApplied}</td>
      <td>{props.position}</td>
      <td>{props.company}</td>
      <td>
         <Link className="btn btn-primary" to={`/viewApplication/${props.id}`}>View</Link>
      </td>
    </tr>
  )
}

export default ApplicationListItem;