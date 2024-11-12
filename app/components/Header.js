"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const showSideBar = () => setSidebarVisible(true);
  const hideSideBar = () => setSidebarVisible(false);

  const menu = [
    {
      name: "HOME",
      path: "/",
    },
    {
      name: "ABOUT",
      path: "/about",
    },
    {
      name: "CONTACT",
      path: "/contact",
    },
    {
      name: "POLITICIANS",
      path: "/politicians",
    },
  ];

  return (
    <>
      <header className="backdrop-blur-xl fixed w-full mb-40 flex items-center justify-between py-6 px-10 xl:px-24 z-40">
        <Link id="logo" href="/" className="text-white text-3xl font-bold font-main">
          Civic<span className="text-[#ffca0d]">Track</span>
        </Link>

        <nav className="hidden lg:flex">
          <ul className="flex gap-8 text-sm">
            {menu.map((item, index) => (
              <li key={index} className={`text-sm font-bold ${pathname === item.path ? "text-[#ffca0d]" : "text-white"}`}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/login">
          <button className="hidden lg:inline-block border-2 border-white rounded px-8 py-2 text-white font-bold">
            SIGN IN
          </button>
        </Link>

        <button className="lg:hidden" onClick={showSideBar} aria-label="Open Menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width={28} height={28} viewBox="0 -960 960 960">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>
      </header>

      {isSidebarVisible && (
        <>
          <div
            className={`lg:hidden block fixed inset-0 z-30 bg-black opacity-50 transition-opacity duration-200 ease-in-out`}
            onClick={hideSideBar}
          ></div>

          <ul
            className={`lg:hidden block fixed inset-y-0 right-0 z-40 w-64 px-6 bg-gray-800 transition-all duration-500 ease-in-out ${
              isSidebarVisible ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <li onClick={hideSideBar} className="cursor-pointer mt-4 mb-8 flex items-center justify-between w-full">
              <Link id="logo" href="/" className="text-white text-3xl font-bold font-main">
                Civic<span className="text-[#ffca0d]">Track</span>
              </Link>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="26" viewBox="0 -960 960 960" width="26" onClick={hideSideBar}>
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </li>

            {menu.map((item, index) => (
              <li
                key={index}
                className={`py-2 text-lg ${pathname === item.path ? 'text-[#ffca0d]' : 'text-white'} hover:text-[#ffca0d] transition duration-200`}
              >
                <Link href={item.path} onClick={hideSideBar}>
                  {item.name}
                </Link>
              </li>
            ))}

            <div className="mt-4">
              <h2 className="text-xl text-white">Support Us</h2>
              <div className="flex flex-col text-white gap-1 mt-4 text-base">
                Give us a star
                <Link
          href="https://github.com/CodeGallantX/CivicTrack/stargazers" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-2 inline-flex items-center"
        >
          <img 
            src="https://img.shields.io/github/stars/CodeGallantX/CivicTrack?style=social" 
            alt="GitHub stars"
            className="h-auto w-24"
          />
        </Link>
              </div>
            </div>
          </ul>
        </>
      )}
    </>
  );
};

export default Header;
