import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// MOMENT
const moment = require('moment');

const ViewApplication = () => {
  const { application_id } = useParams();
  const [application, setApplication] = useState({});

  useEffect(() => {
    axios.get(`/applications/${application_id}`)
    .then((res) => {
      setApplication(res.data.application)
    })
    .catch((e) => {
      console.log(e);
    })
  }, [])

  return (
    <div>
      
      <div className="col-11 mx-auto ">
        <div className="card my-5">
          <div className="card-header text-center">
            <h1>View Application</h1>
          </div>
          <div className="card-body">
            <h5>Company</h5>
            <p>{application.company}</p>
            <h5>Title</h5>
            <p>{application.position}</p>
            <h5>Job Posting Link</h5>
            <p>{application.link}</p>
            <h5>Date Found</h5>
            <p>{moment(application.date_job_found).format('MM/DD/YYYY')}</p>
            <h5>Date Applied</h5>
            <p>{moment(application.date_applied).format('MM/DD/YYYY')}</p>
            <h5>Research Done</h5>
            <input type="checkbox"></input>
            <h5>LinkedIn Connection</h5>
            <input type="checkbox"></input>
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-primary">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
          
        </div>
        <div className="card">
          <div className="card-header">
            <h1>Notes</h1>
          </div>
          <div className="card-body">
            <h6>New Note</h6>
            <textarea class="form-control"></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewApplication;