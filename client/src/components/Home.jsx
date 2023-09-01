import React from "react";

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card d-flex justify-content-center" style={{width: "70vw", height: "60vh"}} >
      <img src="https://lp-cms-production.imgix.net/2019-06/3cb45f6e59190e8213ce0a35394d0e11-nice.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4" className="card-img-top" alt="hello" />
        <div className="card-body">
          <h5 className="card-title">JobSearch Pro: Your Ultimate Job Hunting Companion</h5>
          <p className="card-text">JobSearch Pro is a powerful and user-friendly mobile app that streamlines and enhances your job search experience. Say goodbye to scattered notes, multiple job boards, and missed opportunities. With JobSearch Pro, you can efficiently manage your job hunt from start to finish.</p>
          <a href="#" className="btn btn-primary">Get Start</a>
        </div>
      </div>
    </div>
  )
}

export default Home;