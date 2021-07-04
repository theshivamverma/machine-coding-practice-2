import { Link } from "react-router-dom"
import { useProduct } from "../products"

function Navbar() {

    const { productsData } = useProduct()

    const { cart } = productsData

    return (
      <div>
        <nav class="nav top-fixed p-1 box-shadow-down">
          <h1 class="font-size-m">Flipkart</h1>
          <div class="menu">
            <Link to="/">
              <button class="btn btn-icon icon-text-down">
                <i class="fas fa-store icon-med"></i>
                <p class="mt-05">Store</p>
              </button>
            </Link>
            <Link to="/cart">
              <button class="btn btn-icon icon-text-down">
                <i class="fas fa-shopping-cart icon-med icon-badge">
                  {cart.filter((cartItem) => cartItem.saveForLater === false)
                    .length > 0 && (
                    <span class="badge circle bdg-tr bdg-num bdg-blue">{cart.filter((cartItem) => cartItem.saveForLater === false)
                    .length}</span>
                  )}
                </i>
                <p class="mt-05">Cart</p>
              </button>
            </Link>
          </div>
        </nav>
      </div>
    );
}

export default Navbar
