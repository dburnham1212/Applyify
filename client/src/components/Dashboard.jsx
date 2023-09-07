import { useEffect, useState, useContext } from "react";
import axios from 'axios';

// COMPONENTS
import ApplicationCardItem from "./ApplicationCardItem";
import ApplicationListItem from "./ApplicationListItem";

// CONTEXT PROVIDERS
import { authContext } from "../providers/AuthProvider";
import CreateApplicationModal from "./CreateApplicationModal";

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
  const [viewNewAppModal, setViewNewAppModal] = useState(false)

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
      <h1 className="pt-5 text-center text-3xl font-bold">My Applications</h1>
      <div className="w-11/12 my-1 mx-auto flex gap-2">
        <button className="btn btn-dark my-1" onClick={() => setView(viewStates.list)}>List view</button>
        <button className="btn btn-dark my-1" onClick={() => setView(viewStates.card)}>Card view</button>
      </div>
      {/* List view */}
      {view === viewStates.list && 
        <div className="w-11/12 mx-auto table-responsive text-nowrap border border-dark">
          <table class="table table-striped border-dark table-auto">
            <thead className="text-center bg-secondary">
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
        <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-2 ">
          {applicationCardData}
        </div>
      }
      <div className="flex justify-center pt-3">
        <button 
          className="btn btn-dark btn-lg"
          onClick={() => setViewNewAppModal(true)}
        >
          +
        </button>
      </div>
      {viewNewAppModal && <CreateApplicationModal setView={setViewNewAppModal}/>}
    </div>
  )
}

export default Dashboard;