import React from "react";
import "../node_modules/bootstrap/js/src/dropdown";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="border p-3 ">
      <div className="row">
        <div className="col-10">
          <Link to={`${props.obj.name}`} style={{ textDecoration: "none" }}>
            <h5 className="text-success fw-bold fs-6 ">{props.obj.name}</h5>
          </Link>
        </div>
        <div className="col-2">
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa fa-regular fa-ellipsis-v"></i>
            </button>

            <ul class="dropdown-menu multi-column columns-2">
              <div class="row">
                <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div
                    class="multi-column-dropdown"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <div className="dropdown-header fs-6 fw-bold " href="#">
                      View
                    </div>
                    <a class="dropdown-item" href="#">
                      All
                    </a>
                    <a class="dropdown-item" href="#">
                      Ready
                    </a>
                    <a class="dropdown-item" href="#">
                      Waiting
                    </a>
                    <a class="dropdown-item" href="#">
                      Draft
                    </a>
                    <a class="dropdown-item" href="#">
                      Cancelled
                    </a>
                  </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div
                    class="multi-column-dropdown"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <div className="dropdown-header fs-6 fw-bold" href="#">
                      New
                    </div>
                    <a class="dropdown-item" href="#">
                      Immediate Transfer
                    </a>
                    <a class="dropdown-item" href="#">
                      Planned Transfer
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-3">
        <Link to={`${props.obj.name}`} style={{ textDecoration: "none" }}>
          <button className="btn btn-success ">{props.obj.process}</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
