import React from "react";

const ItemCard = ({ itemName, exchangeFor, imageUrl }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt={itemName} />
        <div className="card-body">
          <h5 className="card-title">{itemName}</h5>
          <p className="card-text">{`Exchange for: ${exchangeFor}`}</p>
          <a href="/" className="btn btn-warning">
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
