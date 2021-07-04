/* eslint-disable */

import { useState, useEffect } from "react";
import { useProduct } from "../products";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const [inCart, setInCart] = useState(false);
  const { productsData, productDispatch } = useProduct();

  const { cart } = productsData;

  function setInCartFlag() {
    cart.forEach((cartItem) => {
      if (cartItem.product.id === product.id) {
        setInCart(true);
      }
    });
  }

  useEffect(() => {
    setInCartFlag();
  }, [cart]);

  return (
    <div className="card-product p-05 card-shadow">
      <div className="product-img">
        <img src={product.imgURL} alt="" />
      </div>
      <h1 className="product-heading mt-1">{product.name}</h1>

      <p className="product-desc mt-05">{product.brand}</p>
      <h2 className="price mt-05">Rs {product.price}</h2>
      <div className="og-price">
        <span className="price-cut">Rs. {product.mrp}</span>
        <span className="discount">
          ({Math.floor(((product.mrp - product.price) * 100) / product.mrp)}% Off)
        </span>
        <span className="review bgAlertGreen colorWhite m-0-05 border-round">
          <span className="review-text">4.5</span>
          <i className="fas fa-star"></i>
        </span>
      </div>
      {inCart ? (
        <Link to="/cart">
          <button
            style={{ width: "100%" }}
            className="btn btn-col btn-primary mt-1 border-round"
          >
            Go to Cart
          </button>
        </Link>
      ) : (
        <button
          disabled={inCart}
          className="btn btn-col btn-primary mt-1 border-round"
          onClick={() =>
            productDispatch({ type: "ADD_TO_CART", payload: { product } })
          }
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;
