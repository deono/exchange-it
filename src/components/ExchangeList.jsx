import React from "react";
import ExchangeItem from "./ExchangeItem";
import { ITEMS } from "../data/items";

const ExchangeList = () => {
  return (
    <div>
      {ITEMS.map(item => (
        <ExchangeItem key={item.itemID} {...item} />
      ))}
    </div>
  );
};

export default ExchangeList;
