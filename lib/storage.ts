import { CartItem, Product } from './types';

export const useCart = () => {
  const getCart = (): CartItem[] => {
    if (typeof window === 'undefined') return [];
    return JSON.parse(localStorage.getItem('cart') || '[]');
  };
  const addToCart = (product: Product) => {
    const cart = getCart();
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  const updateQuantity = (id: number, quantity: number) => {
    const cart = getCart();
    const item = cart.find(item => item.id === id);
    if (item) {
      item.quantity = quantity;
      if (quantity <= 0) {
        const filtered = cart.filter(c => c.id !== id);
        localStorage.setItem('cart', JSON.stringify(filtered));
        return filtered;
      }
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    return cart;
  };
  const getTotal = () => {
    return getCart().reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };
  return { getCart, addToCart, updateQuantity, getTotal };
};

export const useWishlist = () => {
  const getWishlist = (): Product[] => {
    if (typeof window === 'undefined') return [];
    return JSON.parse(localStorage.getItem('wishlist') || '[]');
  };
  const toggleWishlist = (product: Product) => {
    const wishlist = getWishlist();
    const exists = wishlist.find(p => p.id === product.id);
    const newList = exists 
      ? wishlist.filter(p => p.id !== product.id)
      : [...wishlist, product];
    localStorage.setItem('wishlist', JSON.stringify(newList));
  };
  return { getWishlist, toggleWishlist };
};
