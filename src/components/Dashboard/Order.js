import React from "react";

const Order = ({ name, date, amount }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{date}</td>
      <td>{amount}</td>
    </tr>
  );
};

export default Order;
