import React from "react";

const Cards = (item) => {
  return (
    <React.Fragment>
      {item && item.map((item) => {
        return (
          <div className="album py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <div className="card-deck">
                      <div className="card" id="foo">
                        <div className="card-body">
                          <h6 className="card-title">{item.product_name}</h6>
                          <p className="card-text"></p>
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
        )
      })}
      )
    </React.Fragment>
  );
};

export default Cards;

