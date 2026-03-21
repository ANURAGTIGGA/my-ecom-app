"use client";
import { useCart } from "@/lib/storage";
import CartItem from "@/components/feature/CartItem";
import Link from "next/link";

export default function Cart() {
  const { cart, updateQuantity, getTotal } = useCart(); // Now uses state, no direct localStorage

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>
          Your cart is empty. <Link href="/">Shop now</Link>
        </p>
      ) : (
        <>
          <div className="space-y-4 mb-8">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} onUpdate={updateQuantity} />
            ))}
          </div>
          <div className="text-2xl font-bold text-right">
            Total: ${getTotal().toFixed(2)}
          </div>
          <Link
            href="/checkout"
            className="bg-green-500 text-white py-3 px-8 rounded-lg hover:bg-green-600 block mt-8 w-fit ml-auto"
          >
            Proceed to Checkout
          </Link>
        </>
      )}
    </main>
  );
}
