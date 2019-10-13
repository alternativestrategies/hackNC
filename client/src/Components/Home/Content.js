import React from "react";

const Content = () => {
  return (
    <section id="who">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2>Sailor Merch</h2>

          <hr align="left" width="50%" />
          <p class="lead">
            A collection of the latest Sailor Moon gifts and merchandise
            you can buy online! Includes products such as clothes, jewelry
            and accessories inspired by your favorite Sailor Scouts and
            guardian cats. You won’t believe some of the Sailor Moon merch
            we find online that will have you reaching for your wallet.
          </p>
          <button type="button" class="btn btn-who">
            Check it Out
          </button>
        </div>

        <div class="col-md-6">
          <img
            class="img-fluid rounded-pill"
            src="https://cdn.dribbble.com/users/1781642/screenshots/4821721/dribbble.jpg" alt="fashion"
          />
        </div>
      </div>
    </div>
  </section>
  );
};

export default Content;
