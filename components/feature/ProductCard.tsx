"use client";
import { Product } from "@/lib/types";
import { useCart, useWishlist } from "@/lib/storage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();
  const { toggleWishlist, wishlist } = useWishlist();
  const router = useRouter();
  const inWishlist = wishlist.some((p) => p.id === product.id);

  return (
    <div className="flex flex-col border border-[#e6e3e3] rounded-lg p-4 shadow-md hover:shadow-lg transition">
      <Link href={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover rounded"
        />
      </Link>
      <h3 className="font-bold mt-2">{product.title}</h3>
      <p className="text-gray-600 text-sm mt-1">
        {product.description.substring(0, 100)}...
      </p>
      <p className="text-2xl font-bold text-green-600 mt-2">${product.price}</p>
      <div className="flex flex-1 items-end gap-2 mt-4">
        <button
          onClick={() => addToCart(product)}
          className="flex-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer"
        >
          Add to Cart
        </button>
        <button
          onClick={() => toggleWishlist(product)}
          className="p-2 h-10 text-2xl cursor-pointer"
        >
          {" "}
          {inWishlist ? (
            <IoIosHeart color="red" />
          ) : (
            <IoIosHeartEmpty color="red" />
          )}
        </button>
      </div>
    </div>
  );
}
