"use client";
import { useWishlist } from "@/lib/storage";
import ProductCard from "@/components/feature/ProductCard";
import { Product } from "@/lib/types";

export default function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-8">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
