import { Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/navbar';
import Home from './pages/home';
import ProductDetails from './pages/productDetails';

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
      </Routes>
    </>
  );
}

export default App;
