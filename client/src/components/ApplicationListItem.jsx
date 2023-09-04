function ApplicationListItem(props) {

  return(
    <tr>
      <td>{props.dateApplied}</td>
      <td>{props.position}</td>
      <td>{props.company}</td>
      <td>
         <button className="btn btn-primary">View</button>
      </td>
      <td>
         <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  )
}

export default ApplicationListItem;