import React from "react";
import ItemCard from "./ItemCard";
import { ITEMS } from "../data/items";

const ItemList = () => {
  return (
    <div className="container">
      <div className="row">
        {ITEMS.map(item => (
          <ItemCard key={item.itemID} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
