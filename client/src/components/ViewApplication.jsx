import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// MOMENT
const moment = require('moment');



const ViewApplication = () => {
  
  const [application, setApplication] = useState({});
  const [editMode, setEditMode] = useState(false);

  // application data for editing
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [link, setLink] = useState("");
  const [dateFound, setDateFound] = useState("");
  const [dateApplied, setDateApplied] = useState("");

  // USE PARAMS
  const { application_id } = useParams();
  // NAVIGATE
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/applications/${application_id}`)
    .then((res) => {
      setApplication(res.data.application);
      setCompany(res.data.application.company);
      setPosition(res.data.application.position);
      setLink(res.data.application.link);
      setDateFound(res.data.application.date_job_found);
      setDateApplied(res.data.application.date_applied);
    })
    .catch((e) => {
      console.log(e);
    })
  }, [])

  const saveUpdatesToApplication = async () => {
    await axios.post(`/applications/update/${application_id}`, 
    { 
      company,
      position,
      link,
    }
    )
    .then((res) => {
      console.log(res)
      setEditMode(false);
    })
    .catch((e) => {
      console.log(e)
    })
  }

  const deleteApplication = async () => {
    await axios.post(`/applications/delete/${application_id}`)
    .then((res) => {
      console.log(res)
    })
    .catch((e) => {
      console.log(e)
    })

    navigate('/dashboard');
  }

  return (
    <div>
      
      <div className="col-11 mx-auto  py-5">
        <div className="card mb-5">
          <div className="card-header text-center">
            <h1>View Application</h1>
          </div>
          <div className="card-body">
            {editMode ? 
              <div>
                <div className="form-group mb-1">
                  <h5>Company</h5>
                  <input 
                    className="form-control" 
                    value={company} 
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div className="form-group mb-1">
                  <h5>Title</h5>
                  <input 
                    className="form-control" 
                    value={position} 
                    onChange={(e) => setPosition(e.target.value)}
                  />
                </div>
                <div className="form-group mb-1">
                  <h5>Job Posting Link</h5>
                  <input 
                    className="form-control" 
                    value={link} 
                    onChange={(e) => setLink(e.target.value)}
                  />
                </div>
                <div className="form-group mb-1">
                  <h5>Date Found</h5>
                  <input 
                    type="date"
                    className="form-control" 
                    value={moment(dateFound).format('YYYY-MM-DD')}
                    onChange={(e) => setDateFound(e.target.value)}
                  />
                </div>
                <div className="form-group mb-1">
                  <h5>Date Applied</h5>
                  <input 
                    type="date"
                    className="form-control" 
                    value={moment(dateApplied).format('YYYY-MM-DD')}
                    onChange={(e) => setDateApplied(e.target.value)}
                  />
                </div>
                <h5>Research Done</h5>
                <input type="checkbox"></input>
                <h5>LinkedIn Connection</h5>
                <input type="checkbox"></input>
              </div>
            :
              <div>
                <h5>Company</h5>
                <p>{company}</p>
                <h5>Title</h5>
                <p>{position}</p>
                <h5>Job Posting Link</h5>
                <p>{link}</p>
                <h5>Date Found</h5>
                <p>{moment(dateFound).format('MM/DD/YYYY')}</p>
                <h5>Date Applied</h5>
                <p>{moment(dateApplied).format('MM/DD/YYYY')}</p>
                <h5>Research Done</h5>
                <p>{application.research_done ? "Yes" : "No"}</p>
                <h5>LinkedIn Connection</h5>
                <p>{application.linked_in_connection ? "Yes" : "No"}</p>
              </div>
            }
            <div className="d-flex justify-content-end gap-2">
              {editMode ? 
                <button className="btn btn-primary" onClick={()=>saveUpdatesToApplication()}>Save</button>
              :
                <button className="btn btn-primary" onClick={()=>setEditMode(true)}>Edit</button>
              }
              <button className="btn btn-danger" onClick={()=>deleteApplication()}>Delete</button>
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