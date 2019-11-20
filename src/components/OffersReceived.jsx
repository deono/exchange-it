import React from "react";
import TableRow from "./TableRow.jsx";
import { ITEMS } from "../data/items.js";

const OffersReceived = () => {
  return (
    <div>
      <h3 className="text-warning text-center">Offers Received</h3>
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

export default OffersReceived;
