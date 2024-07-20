"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className='flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 dark:bg-[#111]/20'>
      <nav
        className='max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between'
        aria-label='Global'
      >
        <Link
          className='flex-none text-3xl font-semibold dark:text-white'
          href='/'
        >
          Varchasv<span className='text-[#fec576]'>H.</span>
        </Link>
        <div className='flex flex-row items-center gap-5 mt-5 sm:justify-start sm:mt-0 sm:ps-5'>
          <Link
            className={`font-medium ${
              pathname === "/"
                ? "text-[#fec576]"
                : "text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
            }`}
            href='/'
            aria-current={pathname === "/" ? "page" : undefined}
          >
            Home
          </Link>
          <Link
            className={`font-medium ${
              pathname === "/about"
                ? "text-[#fec576]"
                : "text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
            }`}
            href='/about'
          >
            About
          </Link>
          <Link
            className={`font-medium ${
              pathname === "/projects"
                ? "text-[#fec576]"
                : "text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
            }`}
            href='/projects'
          >
            Projects
          </Link>
          <Link
            className={`font-medium ${
              pathname === "/contact"
                ? "text-[#fec576]"
                : "text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
            }`}
            href='/contact'
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
