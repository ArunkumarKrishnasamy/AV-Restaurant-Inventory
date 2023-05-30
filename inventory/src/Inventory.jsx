import React from "react";

function Inventory() {
  return (
    <div className="inventory body">
      <div className="row mt-3">
        <div className="col-5">
          <h4 className="text-muted">Inventory Overview</h4>
        </div>
        <div className="col-7 ">
          <div className="form-control">
            <span>
              <i class="fa fa-search" aria-hidden="true"></i>
            </span>
            <span className="ms-1">
              <input
                type="text"
                className=" mt-1"
                name="search"
                id="search"
                placeholder="Search...."
              />
            </span>
          </div>
          <div className="row ms-2 mt-2">
            <div className=" col-3 filterBy">
              <span>
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-filled/50/filter--v1.png"
                  alt="filter--v1"
                />
              </span>
              <span className="fs-6 text-dark">Filters</span>
            </div>
            <div className="col-3 groupBy">
              <span>
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/sf-regular-filled/48/layers.png"
                  alt="layers"
                />
              </span>
              <span className="fs-6 text-dark">Groupby</span>
            </div>
            <div className="col-4 favourites">
              <span>
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-glyphs/30/star--v1.png"
                  alt="star--v1"
                />
              </span>
              <span className="fs-6 text-dark">Favourites</span>
            </div>
            <div className="col-2 pagination">
              <button className="btn">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-glyphs/30/less-than.png"
                  alt="less-than"
                />
              </button>
              <button className="btn">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-glyphs/50/more-than.png"
                  alt="more-than"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
