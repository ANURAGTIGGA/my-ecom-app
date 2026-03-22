import { Product } from './types';

// export const fetchProducts = async (): Promise<Product[]> => {
//   const res = await fetch('https://fakestoreapi.com/products');
//   if (!res.ok) throw new Error('Failed to fetch products');
//   return res.json();
// };

// export const fetchProduct = async (id: string): Promise<Product> => {
//   const res = await fetch(`https://fakestoreapi.com/products/${id}`);
//   if (!res.ok) throw new Error('Product not found');
//   return res.json();
// };


// Replaced Fake Store API with DummyJSON (CORS-friendly)
export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch('https://dummyjson.com/products?limit=20');
  if (!res.ok) throw new Error('Failed to fetch products');
  const data = await res.json();
  return data.products.map((p: any) => ({
    id: p.id,
    title: p.title,
    price: p.price,
    description: p.description,
    image: p.thumbnail,  // Use thumbnail for faster loads
    category: p.category
  }));
};

export const fetchProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) throw new Error('Product not found');
  const product = await res.json();
  return {
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description,
    image: product.images[0] || product.thumbnail,
    category: product.category
  };
};
