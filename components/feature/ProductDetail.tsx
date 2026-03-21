"use client";
import { Product } from "@/lib/types";
import { useCart, useWishlist } from "@/lib/storage";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Props {
  product: Product;
}

export default function ProductDetail({ product }: Props) {
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState("");
  const { addToCart } = useCart();
  const { toggleWishlist, wishlist } = useWishlist();

  //if (loading) return <p>Loading...</p>;
  //if (error || !product) return <p>Error: {error || "Product not found"}</p>;

  const inWishlist = wishlist.some((p) => p.id === product.id);

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-96 object-cover rounded-lg mb-8"
      />
      <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
      <p className="text-xl text-gray-600 mb-8">{product.description}</p>
      <p className="text-3xl font-bold text-green-600 mb-8">${product.price}</p>
      <div className="flex gap-4">
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 text-xl"
        >
          Add to Cart
        </button>
        <button
          onClick={() => toggleWishlist(product)}
          className={`py-3 px-8 rounded-lg text-xl ${inWishlist ? "bg-red-500 text-white" : "bg-gray-200"}`}
        >
          {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
      </div>
    </div>
  );
}
