import { Link } from "react-router-dom";


function ApplicationListItem(props) {

  return(
    <tr className="bg-secondary">
      <td>{props.dateApplied}</td>
      <td>{props.position}</td>
      <td>{props.company}</td>
      <td>
         <Link className="btn btn-dark" to={`/viewApplication/${props.id}`}>View</Link>
      </td>
    </tr>
  )
}

export default ApplicationListItem;