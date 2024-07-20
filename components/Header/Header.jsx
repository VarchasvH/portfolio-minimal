"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <header className='bg-[#111]/50 text-white p-4 text-base  '>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center space-x-4'>
          <Link
            href='/'
            passHref
            className={`text-white ${
              router.pathname === "/"
                ? "text-yellow-400"
                : "hover:text-yellow-400"
            }`}
          >
            Home
          </Link>
          <Link
            href='/about'
            passHref
            className={`text-white ${
              router.pathname === "/about"
                ? "text-yellow-400"
                : "hover:text-yellow-400"
            }`}
          >
            About
          </Link>
          <Link
            href='/projects'
            passHref
            className={`text-white ${
              router.pathname === "/projects"
                ? "text-yellow-400"
                : "hover:text-yellow-400"
            }`}
          >
            Projects
          </Link>
          <Link
            href='/contact'
            passHref
            className={`text-white ${
              router.pathname === "/contact"
                ? "text-yellow-400"
                : "hover:text-yellow-400"
            }`}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
