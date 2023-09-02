import React from "react";
import "../stylesheets/landingPage.css"

const Home = () => {
  return (
    <div>
      <img src="https://lp-cms-production.imgix.net/2019-06/3cb45f6e59190e8213ce0a35394d0e11-nice.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4" className="landing__hero-image" alt="hello" />
      <button href="#" className="landing__get-started-button btn btn-dark btn-lg">Get Started</button>
      <h1 className="landing__hero-image-title">Applyify</h1>
      <h5 className="landing__hero-image-text">Your Ultimate Job Hunting Companion</h5>
      <div className="card my-5 mx-auto col-10" >
        <div className="card-header">
          <h2> What can applyify do for you? </h2>
        </div>
        <div className="card-body">
          <h1></h1>
          <p className="card-text">Applyify is a powerful and user-friendly mobile app that streamlines and enhances your job search experience. Say goodbye to scattered notes, multiple job boards, and missed opportunities. With JobSearch Pro, you can efficiently manage your job hunt from start to finish.</p>
        </div>
      </div>
    </div>
  )
}

export default Home;