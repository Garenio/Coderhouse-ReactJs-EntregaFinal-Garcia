import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";

import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NotFound } from "./components/NotFound";
import { CartProvider } from "./contexts/CartContext";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
