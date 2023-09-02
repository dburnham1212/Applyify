import applications from "../mocks/applications";
import ApplicationListItem from "./ApplicationListItem";

function Dashboard() {

  const applicationTableData = applications.map((application, index) => 
    <ApplicationListItem 
      key={index} 
      company={application.company}
      foundDate={application.dateJobFound}
      position={application.position}
    />
  )

  return(
    <div>

      <h1 className="py-5 text-center">My Applications</h1>
      <div className="col-11 mx-auto table-responsive text-nowrap">
        <table class="table table-striped ">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Position</th>
              <th scope="col">Company</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {applicationTableData}
          </tbody>
        </table>
        
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary btn-lg">
          +
        </button>
      </div>
    </div>
  )
}

export default Dashboard;