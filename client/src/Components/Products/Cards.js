import React from "react";

const Cards = () => {
  return (
    <div>
      <div className="album py-5">
        <div className="container">
          <div className="row">
            {/* {products.map((products, index) => ( */}
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <div className="card-deck">
                    <div className="card" id="foo">
                      <img
                        className="card-img-top rounded"
                        src="https://en.es-static.us/upl/2017/02/sirius-2-19-2018-Jim-Livingston-Custer-SD-lg-e1519156718851.jpg"
                        alt="hi"
                      />

                      <div className="card-body">
                        <h6 className="card-title">EDEW</h6>
                        <p className="card-text">DWEDWE</p>
                      </div>
                      <div className="card-footer">
                        <small className="price">$DWEW</small>
                        <button
                          type="button"
                          className="btn btn-secondary float-right"
                        >
                          Buy
                        </button>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

