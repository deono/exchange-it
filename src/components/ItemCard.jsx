import React from "react";

const ItemCard = () => {
  return (
    <div>
      <div class="card">
        <img
          src="https://source.unsplash.com/7SxSkCvVM1U"
          class="card-img-top"
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">Item name</h5>
          <p class="card-text">Exchange for: something nice</p>
          <a href="/" class="btn btn-primary">
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
