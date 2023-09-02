function ApplicationListItem(props) {

  return(
    <tr>
      <td>{props.foundDate}</td>
      <td>{props.company}</td>
      <td>{props.position}</td>
      <td>
         <button className="btn btn-primary">Edit</button>
      </td>
      <td>
         <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  )
}

export default ApplicationListItem;