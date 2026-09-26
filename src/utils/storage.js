const STORAGE_KEY = 'veyzo-cart';

export function loadCart() {
  try {
    const cart = localStorage.getItem(STORAGE_KEY);
    return cart ? JSON.parse(cart) : [];
  } catch {
    return [];
  }
}

export function saveCart(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    throw new Error('Unable to save to localStorage.');
  }
}
