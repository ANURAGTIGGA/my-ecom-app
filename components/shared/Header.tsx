import Link from "next/link";

export const Header = () => {
  return (
    <header className="px-6 py-4 bg-[#F2F2F2] dark:bg-[#ffffff26]">
      <nav className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-1.5">
          <div className="text-xl">Anurag's ECOM</div>
        </div>
        <div className="flex space-x-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl">
              Your Wishlist
            </Link>
            <Link href="/" className="text-xl">
              Cart
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
