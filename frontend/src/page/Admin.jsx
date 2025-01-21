import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import {
  addProduct,
  // delProduct,
  getData,
} from "../redux/features/productSlice";

const Admin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const { products } = useSelector((state) => state.products);

  const { handleSubmit, handleChange, resetForm, values } = useFormik({
    initialValues: {
      image: "",
      title: "",
      price: "",
      category: "",
    },
    onSubmit: (values) => {
      dispatch(addProduct(values));
      closeModal();
      // resetForm(); // Reset the form after submitting
    },
  });

  return (
    <div>
      {modal && (
        <form onSubmit={handleSubmit}>
          <input
            type="url"
            name="image"
            onChange={handleChange}
            value={values.image || ""}
            placeholder="Şəkil URL"
          />
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={values.name || ""}
            placeholder="Məhsul adı"
          />
          <input
            type="text"
            name="price"
            onChange={handleChange}
            value={values.price || ""}
            placeholder="Qiymət"
          />
          <input
            type="text"
            name="category"
            onChange={handleChange}
            value={values.category || ""}
            placeholder="Kateqoriya"
          />
          <button type="button" onClick={closeModal}>
            Bağla
          </button>
          <button type="submit">Göndər</button>
        </form>
      )}

      <button onClick={openModal}>Məhsul Yarat</button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Qiymət</th>
            <th>Ad</th>
            <th>Əməliyyatlar</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item._id}>
              <td>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={item.image}
                  alt={item.name}
                />
              </td>
              <td>{item.price}</td>
              <td>{item.name}</td>
              <td>
                <button onClick={() => dispatch(delProduct(item._id))}>
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Admin;
