"use client";
import { Product } from "@/lib/types";
import { useCart, useWishlist } from "@/lib/storage";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

interface Props {
  product: Product;
}

export default function ProductDetail({ product }: Props) {
  const { addToCart, cart, removeFromCart } = useCart();
  const { toggleWishlist, wishlist } = useWishlist();

  const inWishlist = wishlist.some((p) => p.id === product.id);
  let cta;

  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    cta = (
      <button
        onClick={() => removeFromCart(product)}
        className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 text-xl"
      >
        Remove from Cart
      </button>
    );
  } else {
    cta = (
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 text-xl"
      >
        Add to Cart
      </button>
    );
  }

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <Link href="/" className="text-blue-400 flex items-center gap-1.5">
        <IoMdArrowBack /> Back to products
      </Link>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-96 object-cover rounded-lg my-8"
      />
      <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
      <p className="text-xl text-gray-600 mb-8">{product.description}</p>
      <p className="text-3xl font-bold text-green-600 mb-8">${product.price}</p>
      <div className="flex gap-4">
        {cta}
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
