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

  // note data
  const [notes, setNotes] = useState([]);

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

    axios.get(`/notes/application/${application_id}`)
    .then((res) => {
      console.log(res);
      setNotes(res.data.notes)
    })
    .catch((e) => {
      console.log(e)
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
      navigate('/dashboard');
    })
    .catch((e) => {
      console.log(e)
    })

  }

  // Set up notes 
  const viewNotes = notes.map((note) => {
    return( 
      <div key={note.id} className="py-3">
        <p className="font-bold">{moment(note.date_created).format('MM/DD/YYYY')}</p>
        <p>{note.body}</p>
      </div>
    );
  })

  return (
    <div>
      
      <div className="w-11/12 mx-auto py-5">
        <div className="rounded overflow-hidden shadow-lg bg-secondary p-2 mx-auto">
          <div className="font-bold text-3xl text-center">
            <h1>View Application</h1>
          </div>
          <div className="card-body">
            {editMode ? 
              <div>
                <div className="form-group mb-1">
                  <h5 className="font-bold">Company</h5>
                  <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" 
                    value={company} 
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div className="form-group mb-1">
                  <h5 className="font-bold">Title</h5>
                  <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" 
                    value={position} 
                    onChange={(e) => setPosition(e.target.value)}
                  />
                </div>
                <div className="form-group mb-1">
                  <h5 className="font-bold">Job Posting Link</h5>
                  <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" 
                    value={link} 
                    onChange={(e) => setLink(e.target.value)}
                  />
                </div>
                <div className="form-group mb-1">
                  <h5 className="font-bold">Date Found</h5>
                  <input 
                    type="date"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" 
                    value={moment(dateFound).format('YYYY-MM-DD')}
                    onChange={(e) => setDateFound(e.target.value)}
                  />
                </div>
                <div className="form-group mb-1">
                  <h5 className="font-bold">Date Applied</h5>
                  <input 
                    type="date"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" 
                    value={moment(dateApplied).format('YYYY-MM-DD')}
                    onChange={(e) => setDateApplied(e.target.value)}
                  />
                </div>
                <h5 className="font-bold">Research Done</h5>
                <input type="checkbox"></input>
                <h5 className="font-bold">LinkedIn Connection</h5>
                <input type="checkbox"></input>
              </div>
            :
              <div>
                <h5 className="font-bold">Company</h5>
                <p className="py-2">{company}</p>
                <h5 className="font-bold">Title</h5>
                <p className="py-2">{position}</p>
                <h5 className="font-bold">Job Posting Link</h5>
                <p className="py-2">{link}</p>
                <h5 className="font-bold">Date Found</h5>
                <p className="py-2">{moment(dateFound).format('MM/DD/YYYY')}</p>
                <h5 className="font-bold">Date Applied</h5>
                <p className="py-2">{moment(dateApplied).format('MM/DD/YYYY')}</p>
                <h5 className="font-bold">Research Done</h5>
                <p className="py-2">{application.research_done ? "Yes" : "No"}</p>
                <h5 className="font-bold">LinkedIn Connection</h5>
                <p className="py-2">{application.linked_in_connection ? "Yes" : "No"}</p>
              </div>
            }
            <div className="flex justify-end gap-2">
              {editMode ? 
                <button className="btn btn-dark" onClick={()=>saveUpdatesToApplication()}>Save</button>
              :
                <button className="btn btn-dark" onClick={()=>setEditMode(true)}>Edit</button>
              }
              <button className="btn btn-warning" onClick={()=>deleteApplication()}>Delete</button>
            </div>
          </div>
          
        </div>
        <div className="rounded overflow-hidden shadow-lg bg-secondary p-2 mx-auto my-2">
          <div className="text-center">
            <h1 className="font-bold text-3xl">Notes</h1>
          </div>
          <div className="card-body">
            <h6 className="font-bold">New Note</h6>
            <textarea class="form-control"></textarea>
            <div>
              {viewNotes}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ViewApplication;