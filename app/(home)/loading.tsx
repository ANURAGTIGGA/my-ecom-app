export default function HomeLoading() {
  return (
    <div className="container mx-auto p-8">
      <div className="text-4xl font-bold mb-8 bg-gradient-to-r from-gray-200 to-gray-300 bg-clip-text text-transparent animate-pulse">
        Products
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="border border-[#e6e3e3] rounded-lg p-6 shadow-md animate-pulse"
          >
            <div className="w-full h-48 bg-gray-200 rounded mb-4" />
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-4" />
            <div className="h-8 bg-gray-200 rounded w-1/3" />
            <div className="flex gap-2 mt-6 h-10">
              <div className="flex-1 h-full bg-gray-200 rounded" />
              <div className="w-10 h-full bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
