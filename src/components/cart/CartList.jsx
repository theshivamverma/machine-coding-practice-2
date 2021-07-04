import React from "react";

import "./cartStyle.css";

import { useProduct } from "../products";
import { CartCard } from "../cart";

function CartList() {
  const { productsData } = useProduct();

  const { cart } = productsData;

  const totalItems = cart.filter(
    (cartItem) => cartItem.saveForLater === false
  ).length;

  const totalMrp = cart
    .filter((cartItem) => cartItem.saveForLater === false)
    .reduce(
      (acc, cartItem) =>
        (acc = acc +( Number(cartItem.product.mrp) * Number(cartItem.quantity))),
      0
    );
  const totalPrice = cart
    .filter((cartItem) => cartItem.saveForLater === false)
    .reduce(
      (acc, cartItem) =>
        (acc = acc + (Number(cartItem.product.price) * Number(cartItem.quantity))),
      0
    );

  const totalDiscount = cart
    .filter((cartItem) => cartItem.saveForLater === false)
    .reduce(
      (acc, cartItem) =>
        (acc =
          acc + (Number(cartItem.product.mrp) - Number(cartItem.product.price)) * Number(cartItem.quantity)),
      0
    );

  return (
    <div className="flex justify-sb cartlist-container p-2-4">
      <div className="cartinfo">
        <div className="cartItems">
          <div className="flex justify-sb">
            <h1 className="font-size-l bold">My Cart: {totalItems}</h1>
            <h1 className="font-size-l bold">Total: Rs {totalPrice}</h1>
          </div>
          <div className="mt-2 box-shadow-down p-1">
            {cart.filter((cartItem) => cartItem.saveForLater === false).length >
            0 ? (
              cart
                .filter((cartItem) => cartItem.saveForLater === false)
                .map((cartItem) => <CartCard cartItem={cartItem} />)
            ) : (
              <h1 className="font-size-l bold center">Cart is empty</h1>
            )}
          </div>
        </div>
        {cart.filter((cartItem) => cartItem.saveForLater === true).length >
          0 && (
          <div className="savelater box-shadow-down mt-2 p-1">
            <h1 className="font-size-l bold">
              Save for later (
              {cart.filter((cartItem) => cartItem.saveForLater === true).length}
              )
            </h1>
            {cart
              .filter((cartItem) => cartItem.saveForLater === true)
              .map((cartItem) => (
                <CartCard cartItem={cartItem} />
              ))}
          </div>
        )}
      </div>
      <div className="priceinfo">
        <h1 className="font-size-l bold center">Price Details</h1>
        <div className="mt-2 p-1 box-shadow-down">
          <div className="flex justify-sb">
            <h2 className="font-size-m medium">Total Mrp</h2>
            <p className="font-size-m medium">Rs {totalMrp}</p>
          </div>
          <div className="flex justify-sb mt-1">
            <h2 className="font-size-m medium">Total Discount</h2>
            <p className="font-size-m medium colorAlertGreen">
              - Rs {totalDiscount}
            </p>
          </div>
          <hr className="m-2-0" />
          <div className="flex justify-sb mt-1">
            <h2>Amount</h2>
            <p className="font-size-m">Rs {totalMrp - totalDiscount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartList;
