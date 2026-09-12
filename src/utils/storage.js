const STORAGE_KEYS = { cart: 'react-commerce-cart' };

function getStorageItem(key, fallbackValue) {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : fallbackValue;
  } catch {
    return fallbackValue;
  }
}

function setStorageItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    throw new Error('Unable to save to localStorage.');
  }
}

function removeStoredItem(key) {
  localStorage.removeItem(key);
}

export { STORAGE_KEYS, getStorageItem, setStorageItem, removeStoredItem };
