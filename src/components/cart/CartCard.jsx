import { useProduct } from "../products";

function CartCard({ cartItem }) {
  const { productDispatch } = useProduct();

  return (
    <div className="card-cart p-1 card-shadow mt-1">
      <div className="cart-details">
        <div className="cart-product-img">
          <img src={cartItem.product.imgURL} alt="" />
        </div>
        <div className="cart-product-desc">
          <h1 className="product-heading">{cartItem.product.name}</h1>
          <p className="product-desc mt-05">{cartItem.product.brand}</p>
          <div className="change-quantity mt-05">
            <button
              disabled={cartItem.quantity === 1 || cartItem.saveForLater}
              className="btn btn-icon btn-cart"
              onClick={() =>
                productDispatch({
                  type: "DECREASE_QUANTITY",
                  payload: { productId: cartItem.product.id },
                })
              }
            >
              <i className="fas fa-minus icon-xxsm"></i>
            </button>
            <h2 className="quantity bd1 bdGray m-0-05">{cartItem.quantity}</h2>
            <button
              disabled={cartItem.saveForLater}
              className="btn btn-icon btn-cart"
              onClick={() =>
                productDispatch({
                  type: "INCREASE_QUANTITY",
                  payload: { productId: cartItem.product.id },
                })
              }
            >
              <i className="fas fa-plus icon-xxsm"></i>
            </button>
          </div>
          <button
            className="btn btn-link colorRed mt-1"
            onClick={() =>
              productDispatch({
                type: "REMOVE_FROM_CART",
                payload: { productId: cartItem.product.id },
              })
            }
          >
            Remove
          </button>
          <button
            className="btn btn-link ml-05 mt-1"
            onClick={() =>
              productDispatch({
                type: "TOGGLE_SAVE_LATER",
                payload: { productId: cartItem.product.id },
              })
            }
          >
            {cartItem.saveForLater ? "Move to cart" : "Save for later"}
          </button>
        </div>
      </div>
      <div className="cart-product-price">
        <h2 className="price">Rs {cartItem.product.price}</h2>
        <span className="price-cut">Rs. {cartItem.product.mrp}</span>
        <span className="discount">({Math.floor(cartItem.product.price * 100 / cartItem.product.mrp)} % Off)</span>
      </div>
    </div>
  );
}

export default CartCard;
