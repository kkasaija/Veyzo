import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './context/CartProvider.jsx'
import App from './App.jsx';
import './styles/main.scss';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
);
