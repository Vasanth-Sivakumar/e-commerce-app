import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="card text-bg-dark text-white border-0">
      <img
        src="/Assets/AboutBg.jpg"
        className="card-img"
        alt="About Background"
        height="850px"
      />
      <div className="card-img-overlay d-flex flex-column justify-content-flex-start mx-auto">
        <h5 className="card-title display-3 fw-normal mb-0">
          About the Website
        </h5>
        <p className="card-text lead fs-2 py-3">
          • The website is themed around the popular anime and manga series One
          Piece.
          <br />
          • The website is built using the ReactJS library and styled with
          Bootstrap. To fetch data, the website uses the Fetch API along with
          the useState and useEffect hooks, which allow for efficient state
          management and rendering.
          <br />
          • Data is retrieved from the Fakestore API, which provides a variety
          of products to be displayed on the website. To handle the cart
          component, the website implements Redux, a state management library
          that simplifies the process of managing and updating the cart.
          <br />
          • The website offers five buttons that enable the user to sort the
          data by category, making it easy to find the products that you are
          looking for.
          <br />
          • Finally, The website utilizes Email.js to enable sending emails from
          the contact form without the need for server-side code. This
          implementation streamlines the communication process, improves user
          experience, and reduces development time and costs.
          <br />• Do Check the product section here.
          <Link
            to="/products"
            type="button"
            className="btn btn-outline-light ms-3 px-4 py-2 fs-5"
          >
            Products
          </Link>
        </p>
      </div>
    </div>
  );
}

export default About;
