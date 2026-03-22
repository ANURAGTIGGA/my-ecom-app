'use client';
import { useState, useEffect } from 'react';
import { CartItemType, Product } from './types';

export function useCart() {
  const [cart, setCart] = useState<CartItemType[]>([]);

  useEffect(() => {
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

  const removeFromCart = (product: Product) => {
    const filteredCart = cart.filter(item => item.id !== product.id);
    setCart(filteredCart);
    localStorage.setItem('cart', JSON.stringify(filteredCart));
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

  const clearCart = () => {
    localStorage.removeItem('cart');
  }

  return { cart, addToCart, updateQuantity, getTotal, removeFromCart, clearCart };
}

export function useWishlist() {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('wishlist');
    if (saved) setWishlist(JSON.parse(saved));
  }, []);

  const toggleWishlist = (product: Product) => {
    const exists = wishlist.some(p => p.id === product.id);
    const newList = exists 
      ? wishlist.filter(p => p.id !== product.id)
      : [...wishlist, product];
    setWishlist(newList);
    localStorage.setItem('wishlist', JSON.stringify(newList));
  };

  return { wishlist, toggleWishlist };
}

