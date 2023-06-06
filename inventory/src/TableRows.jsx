import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";

function TableRows() {
  const [productList, setPrductList] = useState([]);
  const [showInput, setShowInput] = useState(true);
  const FetchData = async () => {
    try {
      let data = await axios.get("http://localhost:3001/inventory");
      setPrductList(data.data);
      console.log(productList);
    } catch (error) {
      console.error(error);
      alert("Eror in getting Data");
    }
  };
  const formik = useFormik({
    initialValues: {
      product_name: "",
      demand: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.product_name) {
        errors.product_name = "Please Enter Product Name";
      }
      if (!values.demand) {
        errors.demand = "Please Enter Demand Value";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:3001/inventory", values);
        console.log(values);
        FetchData();
        setShowInput(false);
        alert("data posted");
      } catch (error) {
        console.error(error);
        alert("Error in submitting data");
      }
    },
  });
  useEffect(() => {
    FetchData();
  }, []);
  const HandleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/inventory/${id}`);
      alert("Deleted");
      FetchData();
    } catch (error) {
      console.error(error);
      alert("Error while deleting it");
    }
  };

  return showInput ? (
    <tr>
      <td>1</td>

      <td>
        <input
          type="text"
          value={formik.values.product_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="product_name"
          className="form-control"
        />
        <span style={{ color: "red" }}>
          {formik.touched.product_name && formik.errors.product_name ? (
            <div>{formik.errors.product_name}</div>
          ) : null}
        </span>
      </td>
      <td>
        <input
          type="number"
          value={formik.values.demand}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="demand"
          className="form-control"
        />
        <span style={{ color: "red" }}>
          {formik.touched.demand && formik.errors.demand ? (
            <div>{formik.errors.demand}</div>
          ) : null}
        </span>
      </td>

      <td style={{ cursor: "pointer" }} onClick={formik.handleSubmit}>
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/color/48/checkmark--v1.png"
          alt="checkmark--v1"
        />
      </td>
    </tr>
  ) : (
    productList.map((product) => {
      return (
        <tr>
          <td>{product.id}</td>
          <td> {product.product_name}</td>
          <td>{product.demand}</td>
          <td
            onClick={() => {
              HandleDelete(product.id);
            }}
            style={{ cursor: "pointer" }}
          >
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/wired/64/filled-trash.png"
              alt="filled-trash"
            />
          </td>
        </tr>
      );
    })
  );
}

export default TableRows;
