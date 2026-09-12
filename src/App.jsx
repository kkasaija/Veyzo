import { Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/navbar';
import Home from './pages/home';
import ProductDetails from './pages/productDetails';
import Cart from './pages/cart';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/cart"
          element={<Cart />}
        />
      </Routes>
    </>
  );
}

export default App;
