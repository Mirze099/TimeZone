import React from "react";
import "./Basket.scss";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { deleteBasket, minusBtn, plusBtn } from "../redux/features/Basket";

const Basket = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.basket);
  console.log(basket);

  const deteleToBasket = (product) => {
    dispatch(deleteBasket(product));
  };
  const totalPrice = basket.reduce(
    (acc, item) => acc + item.count * item.price,
    0
  );

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Count</th>
          <th>Settings</th>
          <th>Delete item</th>
        </tr>
      </thead>
      <tbody>
        {basket.map((item) => (
          <tr key={item._id}>
            <td>
              <img
                style={{ width: "100px", height: "100p" }}
                src={item.image}
                alt=""
              />
            </td>
            <td>{item.title}</td>
            <td>{item.price * item.count}</td>
            <td>{item.count}</td>
            <td className="d-flex gap-2">
              <button
                onClick={() => {
                  dispatch(minusBtn(item));
                }}
              >
                -
              </button>
              <p>0</p>
              <button
                onClick={() => {
                  dispatch(plusBtn(item));
                }}
              >
                +
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  deteleToBasket(item);
                }}
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <h1>TotalPrice:{totalPrice}</h1>
    </Table>
  );
};

export default Basket;
