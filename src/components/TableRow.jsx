import React from "react";

const TableRow = props => {
  return (
    <tr>
      <td>
        <img
          className="img-thumbnail"
          src={props.imageUrl}
          alt={props.itemName}
          width="100px"
        />
      </td>
      <td>{props.itemName}</td>
      <td>{props.userName}</td>
      <td>{props.date}</td>
      <td>
        <button className="btn btn-warning">View</button>
      </td>
    </tr>
  );
};

export default TableRow;
