import React from "react";
import Products from './Products'


function Home() {
  return (
    <>
    <div className="card text-bg-dark text-white border-0">
      <img src="/Assets/bg.jpg" className="card-img" alt="Home Background" height="750px"/>
      <div className="card-img-overlay d-flex flex-column justify-content-center">
        <div className="container text-light">
        <h5 className="card-title display-3 fw-bolder mb-0">New Season Arrivals</h5>
        <p className="card-text lead fs-2">
        Check Out What's New 
        </p>
        </div>
      </div>
    </div>
    <Products />
    </>
  );
}



export default Home;
