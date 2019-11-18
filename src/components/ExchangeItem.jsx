import React from "react";

const ExchangeItem = ({ itemName, condition, imageUrl, date }) => {
  return (
    <div>
      <div class="card mb-3">
        <div class="row no-gutters">
          <div class="col-md-2">
            <img src={imageUrl} class="card-img" alt={itemName} />
          </div>
          <div class="col-md-10">
            <div class="card-body d-flex flex-row justify-content-between">
              <div>
                <h5 class="card-title">
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
