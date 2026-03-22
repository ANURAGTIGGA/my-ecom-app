"use client";
import Link from "next/link";
import { MdErrorOutline } from "react-icons/md";

export default function GlobalNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-50">
      <div className="text-center max-w-lg mx-auto p-8">
        <h1 className="text-6xl font-black text-gray-900 mb-4 flex justify-center">
          <MdErrorOutline />
        </h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Something is broken
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, we couldn't load the products.
        </p>
        <div className="space-x-4">
          <Link
            href="/"
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 font-semibold"
          >
            Try Again
          </Link>
          <Link
            href="/cart"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 font-semibold"
          >
            View Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
