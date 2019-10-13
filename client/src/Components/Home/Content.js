import React from "react";
import { BrowserRouter as Route, NavLink } from 'react-router-dom';

const Content = () => {
  return (
    <section id="who">

      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2>Stars</h2>

            <hr align="left" width="50%" />
            <p class="lead">
              Everyone knows the phrase "I'll get you the stars from the sky".
              Know it can finally come true ! Only Constellation Stars make it
              even more personal. Why not match the special occasion to an
              astrological date or a loved one’s horoscope!
            </p>
            <NavLink to="/products">
            <button type="button" class="btn btn-who">
              Check it Out
            </button>
            </NavLink>
          </div>

          <div class="col-md-6">
            <img
              class="img-fluid rounded-pill"
              src="https://cdn.dribbble.com/users/1781642/screenshots/4821721/dribbble.jpg"
              alt="space"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
