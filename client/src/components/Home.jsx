import React from "react";
import "../stylesheets/landingPage.css"

const Home = () => {
  return (
    <div>
      <img src="https://lp-cms-production.imgix.net/2019-06/3cb45f6e59190e8213ce0a35394d0e11-nice.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4" className="landing__hero-image" alt="hello" />
      <button href="#" className="landing__get-started-button btn btn-dark btn-lg">Get Started</button>
      <h1 className="landing__hero-image-title">Applyify</h1>
      <h5 className="landing__hero-image-text">Your Ultimate Job Hunting Companion</h5>
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <h2 className="text-3xl text-gray-700 font-bold mb-5">
        What can applyify do for you?
        </h2>
        <p className="text-gray-500 text-lg">
        Applyify is a powerful and user-friendly mobile app that streamlines and enhances your job search experience. Say goodbye to scattered notes, multiple job boards, and missed opportunities. With JobSearch Pro, you can efficiently manage your job hunt from start to finish.
        </p>
      </div>
    </div>
  )
}

export default Home;