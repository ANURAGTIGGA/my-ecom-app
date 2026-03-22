"use client";
import { useCart } from "@/lib/storage";
import Link from "next/link";
import { useState } from "react";

export default function Checkout() {
  const { getTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const total = getTotal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order placed successfully!");
    setOrderPlaced(true);
    //clear cart from storage
    clearCart();
  };

  return (
    <main className="container mx-auto p-8 max-w-2xl">
      <h1 className="text-2xl font-bold mb-8">Checkout</h1>
      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <h2 className="text-2xl mb-4">
          {orderPlaced ? "Order Placed" : "Order Summary"}
        </h2>
        <p className="text-xl font-bold mb-2.5">Total: ${total.toFixed(2)}</p>
        {orderPlaced ? (
          <>
            <p>{formData.name}</p>
            <div className="flex">
              <p>Address : </p>
              <p>{formData.address}</p>
            </div>
            <p>{formData.email}</p>
            <button
              type="submit"
              className="w-full bg-transparent border border-bs-zinc-500 text-black py-3 px-6 rounded-lg text-xl mt-2.5 cursor-pointer"
            >
              <Link href="/">Shop Again</Link>
            </button>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full p-3 border rounded-lg"
              required
            />
            <textarea
              placeholder="Shipping Address"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              className="w-full p-3 border rounded-lg h-32"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 text-xl"
            >
              Place Order
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
