import { useEffect, useState, useContext } from "react";
import axios from 'axios';

// COMPONENTS
import ApplicationCardItem from "./ApplicationCardItem";
import ApplicationListItem from "./ApplicationListItem";

// CONTEXT PROVIDERS
import { authContext } from "../providers/AuthProvider";

// MOMENT
const moment = require('moment');

const viewStates = {
  card: "card",
  list: "list"
}

function Dashboard() {
  const {
    user
  } = useContext(authContext);

  const [view, setView] = useState(viewStates.list)
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios.get(`/applications/user/${user.id}`)
      .then((res) => {
        setApplications(res.data.applications)
      })
      .catch((e) => {
        alert(e);
      });
  }, [])

  const applicationTableData = applications.map((application) => 
    <ApplicationListItem 
      key={application.id}
      id={application.id}
      company={application.company}
      dateApplied={moment(application.date_applied).format('MM/DD/YYYY')}
      position={application.position}
    />
  )

  const applicationCardData = applications.map((application) => 
    <ApplicationCardItem
      key={application.id} 
      id={application.id}
      company={application.company}
      dateApplied={moment(application.date_applied).format('MM/DD/YYYY')}
      position={application.position}
    />
  )

  return(
    <div>
      <h1 className="pt-5 text-center">My Applications</h1>
      <div className="col-11 my-1 mx-auto d-flex gap-2">
        <button className="btn btn-primary my-1" onClick={() => setView(viewStates.list)}>List view</button>
        <button className="btn btn-primary my-1" onClick={() => setView(viewStates.card)}>Card view</button>
      </div>
      {/* List view */}
      {view === viewStates.list && 
        <div className="col-11 mx-auto table-responsive text-nowrap border border-dark">
          <table class="table table-striped border-dark">
            <thead className="thead-dark text-center">
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Position</th>
                <th scope="col">Company</th>
                <th scope="col">View</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {applicationTableData}
            </tbody>
          </table>
        </div>
      }
      {/* Card view */}
      {view === viewStates.card && 
        <div className="col-11 mx-auto containter-fluid ">
          <div className="row g-2">
            {applicationCardData}
          </div>
        </div>
      }
      <div className="d-flex justify-content-center pt-3">
        <button className="btn btn-primary btn-lg">
          +
        </button>
      </div>
    </div>
  )
}

export default Dashboard;