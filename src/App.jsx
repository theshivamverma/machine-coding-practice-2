import { Routes, Route } from "react-router-dom"
import { Navbar } from "./components/nav"
import { CartList } from "./components/cart"
import { ProductList } from "./components/products"

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
