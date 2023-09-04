import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// MOMENT
const moment = require('moment');

const ViewApplication = () => {
  const { application_id } = useParams();
  const [application, setApplication] = useState({});

  useEffect(() => {
    axios.get(`/applications/${1}`)
    .then((res) => {
      setApplication(res.data.application)
    })
    .catch((e) => {
      console.log(e);
    })
  }, [])

  return (
    <div>
      <div className="col-11 mx-auto text-center pt-5">
        <h2>Company</h2>
        <p>{application.company}</p>
        <h2>Title</h2>
        <p>{application.position}</p>
        <h2>Job Posting Link</h2>
        <p>{application.link}</p>
        <h2>Date Found</h2>
        <p>{moment(application.date_job_found).format('MM/DD/YYYY')}</p>
        <h2>Date Applied</h2>
        <p>{moment(application.date_applied).format('MM/DD/YYYY')}</p>
        <h2>Research Done</h2>
        <input type="checkbox"></input>
        <h2>LinkedIn Connection</h2>
        <input type="checkbox"></input>
        <h2>Notes</h2>
      </div>
    </div>
  )
}

export default ViewApplication;