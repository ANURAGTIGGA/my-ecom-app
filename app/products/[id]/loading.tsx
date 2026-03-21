export default function ProductLoading() {
  return (
    <div className="container mx-auto p-8 max-w-4xl animate-pulse">
      <div className="w-full h-96 bg-gray-200 rounded-lg mb-8" />
      <div className="h-10 bg-gray-200 rounded mb-4 w-3/4" />
      <div className="h-20 bg-gray-200 rounded mb-8 w-full" />
      <div className="h-12 bg-gray-200 rounded mb-8 w-1/3" />
      <div className="flex gap-4">
        <div className="h-12 bg-gray-200 flex-1 rounded-lg" />
        <div className="h-12 bg-gray-200 w-40 rounded-lg" />
      </div>
    </div>
  );
}
