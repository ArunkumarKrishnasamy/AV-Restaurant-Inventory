import React, { useState } from "react";

function Receipt_Form() {
  const [operations, setOperations] = useState(true);
  const [AdditionalInfo, setAdditionalInfo] = useState(false);
  const [notes, setNotes] = useState(false);
  const HandleOperations = () => {
    setOperations(true);
    setAdditionalInfo(false);
    setNotes(false);
  };
  const HandleAdditionalInfo = () => {
    setOperations(false);
    setNotes(false);
    setAdditionalInfo(true);
  };
  const HandleNotes = () => {
    setOperations(false);
    setAdditionalInfo(false);
    setNotes(true);
  };
  return (
    <div className="container form">
      <div className="row">
        <div class="col-6 mb-3 row">
          <label for="contact" class="col-3 col-form-label fw-bolder">
            Contact :
          </label>
          <div class="col-9">
            <input type="text" class="form-control" id="contact" />
          </div>
        </div>
        <div class="col-6 mb-3 row">
          <label
            for="scheduled_date"
            className="col-3 col-form-label f   fw-bolder"
          >
            Scheduled Date:
          </label>
          <div class="col-9">
            <input
              type="text"
              class="form-control"
              id="scheduled_date"
              value={Date().toLocaleString()}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div class="col-6 mb-3 row">
          <label for="opeation_type" class="col-3 col-form-label fw-bolder">
            Operation Type:
          </label>
          <div class="col-9">
            <input type="text" class="form-control" id="opeation_type" />
          </div>
        </div>
        <div class="col-6 mb-3 row">
          <label
            for="source_document"
            className="col-3 col-form-label   fw-bolder"
          >
            Source Document:
          </label>
          <div class="col-9">
            <input type="file" class="form-control" id="source_document" />
          </div>
        </div>
      </div>
      <div className="btn-row">
        <span>
          <button
            className="text-secondary border border-bottom-0 border-secondary"
            onClick={HandleOperations}
          >
            Operations
          </button>
        </span>
        <span>
          <button
            className="text-secondary border border-secondary"
            onClick={HandleAdditionalInfo}
          >
            Additional Info
          </button>
        </span>
        <span>
          <button
            className="text-secondary border border-secondary"
            onClick={HandleNotes}
          >
            Note
          </button>
        </span>
        <br />
        {operations ? (
          <>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th className="col-4" scope="col">
                    Product Name
                  </th>
                  <th className="col-4" scope="col">
                    Demand
                  </th>
                  <th scope="col">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/ios-filled/50/sorting-options.png"
                      alt="sorting-options"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-primary" style={{ cursor: "pointer" }}>
                  Add New
                </tr>
              </tbody>
            </table>
          </>
        ) : null}
        {AdditionalInfo ? (
          <div>
            <div className="fs-6 mt-2 fw-bolder">OTHER INFRMATION</div>
            <hr></hr>
            <div className="row">
              <div className="col-2 fw-semibold"> Shipping Policy : </div>
              <div className="col-8"> As soon as possible </div>
            </div>
            <div className="row">
              <div className="col-2 fw-semibold"> Responsible : </div>
              <div className="col-8"> Arun </div>
            </div>
          </div>
        ) : null}
        {notes ? <h1> Notes</h1> : null}
      </div>
    </div>
  );
}

export default Receipt_Form;
