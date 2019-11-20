import React from "react";
import TableRow from "./TableRow";
import { ITEMS } from "../data/items.js";

const OffersMade = () => {
  return (
    <div>
      <h3 className="text-warning text-center">Offers made</h3>
      <table className="table table-hover ">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">ItemName</th>
            <th scope="col">UserName</th>
            <th scope="col">Date</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {ITEMS.map((item, index) => (
            <TableRow key={index} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OffersMade;
