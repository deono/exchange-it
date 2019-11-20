import React from "react";

const ExchangeItem = ({ itemName, condition, imageUrl, date }) => {
  return (
    <div>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-2">
            <img src={imageUrl} className="card-img" alt={itemName} />
          </div>
          <div className="col-md-10">
            <div className="card-body d-flex flex-row justify-content-between">
              <div>
                <h5 className="card-title">
                  {itemName}: {condition}
                </h5>
              </div>

              <button className="btn btn-warning">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeItem;
