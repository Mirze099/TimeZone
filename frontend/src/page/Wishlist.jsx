import React, { useEffect } from "react";
import "./Wishlist.scss";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../redux/features/Basket";
import { deleteWish } from "../redux/features/Wishlist";

const Wishlist = () => {
  const { wishlist } = useSelector((state) => state.wishlist);
  console.log(wishlist);
  const dispact = useDispatch();

  return (
    <div className="cart-wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-heading mb-10">My wishlist</div>
            <div className="table-wishlist">
              <table cellPadding="0" cellSpacing="0" border="0" width="100%">
                <thead>
                  <tr>
                    <th width="45%">Product Name</th>
                    <th width="15%">Unit Price</th>
                    <th width="15%">cart</th>
                    <th width="15%">Setting</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist.map((item) => (
                    <tr key={item._id}>
                      <td width="45%">
                        <div className="display-flex align-center">
                          <div className="img-product">
                            <img
                              src={item.image}
                              alt=""
                              className="mCS_img_loaded"
                            />
                          </div>
                          <div className="name-product">{item.title}</div>
                        </div>
                      </td>
                      <td width="15%" className="price">
                        ${item.price}
                      </td>
                      <td width="15%">
                        <button
                          className="in-stock-box"
                          onClick={() => {
                            dispact(addBasket(item));
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          add to cart
                        </button>
                      </td>
                      <td width="15%">
                        <button
                          className="round-black-btn small-btn"
                          onClick={() => {
                            dispact(deleteWish(item));
                          }}
                        >
                          delete
                        </button>
                      </td>
                      <td width="10%" className="text-center">
                        <a href="#" className="trash-icon">
                          <i className="far fa-trash-alt"></i>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
