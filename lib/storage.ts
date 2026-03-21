'use client';
import { useState, useEffect } from 'react';
import { CartItemType, Product } from './types';

export function useCart() {
  const [cart, setCart] = useState<CartItemType[]>([]);  // Empty initial for SSR

  useEffect(() => {
    // Only run on client after mount
    const saved = localStorage.getItem('cart');
    if (saved) {
      setCart(JSON.parse(saved));
    }
  }, []);

  const addToCart = (product: Product) => {
    const existing = cart.find(item => item.id === product.id);
    const newCart = existing 
      ? cart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      : [...cart, { ...product, quantity: 1 }];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const updateQuantity = (id: number, quantity: number) => {
    let newCart = cart.map(item => 
      item.id === id ? { ...item, quantity } : item
    ).filter(item => item.quantity > 0);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  return { cart, addToCart, updateQuantity, getTotal };
}

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
