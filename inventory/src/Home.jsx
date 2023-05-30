import React from "react";
import Card from "./Card";
import Receipts from "./Receipts";
import Inventory from "./Inventory";
function Home() {
  let Array = [
    { name: "Receipts", process: "0 TO PROCESS" },
    { name: "DeliveryOrders", process: "0 TO PROCESS" },
    { name: "Returns", process: "0 TO PROCESS" },
  ];
  return (
    <div className="container">
      <div className="Titlebar">
        <Inventory />
      </div>
      <hr className="mt-1"></hr>
      <div className="row">
        {Array.map((obj) => {
          return (
            <div className="ms-3 col">
              <Card obj={obj} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
