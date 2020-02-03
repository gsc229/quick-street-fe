import React from "react";
import Order from "./Order";

const OrderHistory = ({ orders, isVendor }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>{isVendor ? `Customer` : `Vendor`}</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {orders &&
            orders.map(o => (
              <Order name={o.name} date={o.date} amount={o.amount} />
            ))}
        </tr>
      </tbody>
    </table>
  );
};

export default OrderHistory;
