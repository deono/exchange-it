import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExchangeList from "./ExchangeList";
import { ITEMS } from "../data/items";

const ItemView = () => {
  const [listExchange, toggleListExchange] = useState(false);

  return (
    <div className="container">
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-8">
            <img
              src={ITEMS[6].imageUrl}
              className="card-img"
              alt={ITEMS[6].itemName}
            />
          </div>
          <div className="col-md-4">
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h3 className="card-title text-warning">{ITEMS[6].itemName}</h3>
                <p className="card-text">
                  <small className="text-muted">
                    Posted by: <Link to="/">{ITEMS[6].userName}</Link> on{" "}
                    {ITEMS[6].date}
                  </small>
                </p>
                <p>
                  Exchange for: <em>{ITEMS[6].exchangeFor}</em>
                </p>
                <p>
                  Condition: <em>{ITEMS[6].condition}</em>
                </p>
                <p className="card-text text-muted">{ITEMS[6].description}</p>
              </div>
              <button
                className="btn btn-warning"
                onClick={() => toggleListExchange(!listExchange)}
              >
                Propose exchange
              </button>
            </div>
          </div>
        </div>
      </div>

      {listExchange && <ExchangeList />}
    </div>
  );
};

export default ItemView;
