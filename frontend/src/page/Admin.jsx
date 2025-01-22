import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import {
  addProduct,
  delProduct,
  getData,
  search,
  sorthigh,
  sortlow,
} from "../redux/features/productSlice";

const Admin = () => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

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
            name="title"
            onChange={handleChange}
            value={values.title || ""}
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
      <br />

      <button onClick={() => dispatch(sortlow())}>low</button>
      <button onClick={() => dispatch(sorthigh())}>high</button>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => dispatch(search(e.target.value))}
      />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Ad</th>
            <th>Qiymət</th>
            <th>Cat</th>
            <th>Əməliyyatlar</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((item, index) => (
              <tr key={index}>
                <td>
                  <img
                    style={{ width: "100px", height: "100px" }}
                    src={item.image}
                    alt=""
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
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
