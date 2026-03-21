import ProductCard from "@/components/feature/ProductCard";
import { fetchProducts } from "@/lib/api";
import { Product } from "../lib/types";

export default async function Home() {
  let products: Product[] = [];
  try {
    products = await fetchProducts();
  } catch (error) {
    console.error(error);
  }

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {products.length === 0 && <p>No products available.</p>}
    </main>
  );
}
