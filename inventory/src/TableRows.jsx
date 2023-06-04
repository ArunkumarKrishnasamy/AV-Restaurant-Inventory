import React, { useState } from "react";
import { useFormik } from "formik";

function TableRows({ rowsData, HandleChange }) {
  return rowsData.map((data, index) => {
    const { Product_Name, Demand } = data;
    const [showIcon, setShowIcon] = useState(true);
    const HandleSubmit = () => {
      console.log("submitted");
    };
    return (
      <tr key={index}>
        <td>{index + 1}</td>

        <td>
          <input
            type="text"
            value={Product_Name}
            onChange={(event) => HandleChange(index, event)}
            name="Product_Name"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="number"
            value={Demand}
            onChange={(event) => HandleChange(index, event)}
            name="Demand"
            className="form-control"
          />
        </td>

        {showIcon ? (
          <td
            style={{ cursor: "pointer" }}
            onClick={() => {
              HandleSubmit();
            }}
          >
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/color/48/checkmark--v1.png"
              alt="checkmark--v1"
            />
          </td>
        ) : (
          <td>
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/color/48/delete-sign--v1.png"
              alt="delete-sign--v1"
            />
          </td>
        )}
      </tr>
    );
  });
}

export default TableRows;
