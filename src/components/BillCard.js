import React from "react";

const BillCard = ({ bill }) => (
  <div style={{ border: "2px solid", borderRadius: 20, padding: 10, margin: 10, textAlign: "left" }}>
    <p>
      Billing Period: {bill.start} -{">"} {bill.end}
    </p>
    <p>
      Usage: {bill.use} {bill.useUnit}
    </p>
    <p>
      Demand: {bill.demand} {bill.demandUnit}
    </p>
    <p>Total Cost: {bill.cost}</p>
    <p>Tnd Cost: {bill.tndCost}</p>
    <p>Gen Cost: {bill.genCost}</p>
  </div>
);

export default BillCard;
