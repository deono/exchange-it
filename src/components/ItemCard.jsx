import React from "react";

const ItemCard = () => {
  return (
    <div>
      <div className="card">
        <img
          src="https://source.unsplash.com/7SxSkCvVM1U"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">Item name</h5>
          <p className="card-text">Exchange for: something nice</p>
          <a href="/" className="btn btn-warning">
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
