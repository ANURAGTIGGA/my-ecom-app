import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosHeart } from "react-icons/io";
import { AiFillDollarCircle } from "react-icons/ai";

export const Header = () => {
  return (
    <header className="px-6 py-4 bg-[#F2F2F2] dark:bg-[#ffffff26]">
      <nav className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-1.5">
          <div className="text-xl">
            <Link href="/" className="text-2xl flex gap-1 items-center">
              <AiFillDollarCircle /> Anurag's ECOM
            </Link>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="flex items-center gap-2">
            <Link href="/wishlist" className="text-l flex gap-1 items-center">
              <IoIosHeart /> Wishlist
            </Link>
            <Link href="/cart" className="text-l flex gap-1 items-center">
              <FaCartShopping /> Cart
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
