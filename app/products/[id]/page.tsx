import { fetchProduct } from "@/lib/api";
import ProductDetail from "@/components/feature/ProductDetail"; // Move client logic to a new client component

interface Props {
  params: Promise<{ id: string }>; // Awaitable params
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params; // Await here
  let product: any = null;
  let error = "";

  try {
    product = await fetchProduct(id);
  } catch (err) {
    error = "Product not found";
  }

  if (error) {
    return <div className="p-8">Error: {error}</div>;
  }

  return <ProductDetail product={product} />;
}
