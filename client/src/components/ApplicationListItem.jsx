import { Link } from "react-router-dom";


function ApplicationListItem(props) {

  return(
    <tr className="bg-secondary">
      <td className="text-secondary-content">{props.dateApplied}</td>
      <td className="text-secondary-content">{props.position}</td>
      <td className="text-secondary-content">{props.company}</td>
      <td>
         <Link className="btn btn-dark" to={`/viewApplication/${props.id}`}>View</Link>
      </td>
    </tr>
  )
}

export default ApplicationListItem;