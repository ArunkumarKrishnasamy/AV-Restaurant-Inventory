import React from "react";
import Receipt_Form from "./Receipt_Form";

function New_Receipt() {
  return (
    <>
      <div className="">
        <div className="row container">
          <div className="col-9 mt-2">
            <span className="title"> Inventory Overview</span>
            <span className="title">/ foodtrac : Receipts</span>
            <span className="text-secondary"> /NEW</span>
          </div>
          <div className="col-3 mt-2">
            <span>
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios-filled/50/print.png"
                alt="print"
              />
              Print
            </span>
            <span className="ms-3">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios-filled/50/gear.png"
                alt="action"
              />{" "}
              Action
            </span>
            <span className="ms-3">
              <button className="new-btn "> NEW</button>
            </span>
          </div>
        </div>
        <hr></hr>
        <div className="row container">
          <div className="col-8">
            <span>
              <button className="new-btn"> VALIDATE</button>
            </span>
            <span className="fw-semibold ms-2" style={{ color: "#016b70" }}>
              PRINT LABELS
            </span>
            <span className="fw-semibold ms-2" style={{ color: "#016b70" }}>
              CANCEL
            </span>
          </div>
          <div className="col-4">
            <span>
              <button style={{ border: "none" }} className="arrow">
                DRAFT
              </button>
            </span>

            <span className=" border border-secondary p-2">WAITING</span>
            <span className="border border-secondary p-2">READY</span>
            <span className="border border-secondary p-2"> DONE</span>
          </div>
        </div>
      </div>
      <hr></hr>
      <Receipt_Form />
    </>
  );
}

export default New_Receipt;
