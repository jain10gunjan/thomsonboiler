"use client";
import React, { useState } from "react";
import companyLogo from "../components/images/logoThomsonsBoiler.png";
// Mock JSON data for the menu
const menuData = [
  {
    label: "Home",
    link: "/",
  },
  // {
  //   label: "Products",
  //   subMenu: [
  //     {
  //       label: "OIL/GAS FIRED",
  //       link: "/about-us",
  //     },
  //     {
  //       label: "Thompac",
  //       link: "/careers",
  //     },
  //     {
  //       label: "THOM MAXX",
  //       link: "/leadership",
  //     },
  //     {
  //       label: "COMBI-THOM",
  //       link: "/leadership",
  //     },
  //     {
  //       label: "WATER TUBE BOILER",
  //       link: "/leadership",
  //     },
  //   ],
  // },
  {
    label: "Products",
    link: "/products",
  },
  {
    label: "Contact",
    link: "/contact",
  },
  {
    label: "About",
    link: "/about-us",
  },
  {
    label: "Careers",
    link: "/careers",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const toggleSubMenu = (label: string) => {
  //   setActiveSubMenu(activeSubMenu === label ? null : label);
  // };

  return (
    <nav className="bg-gradient-to-br from-orange-400 bg-black border-gray-200">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="/" className="flex items-center">
          <img src={companyLogo.src} className="h-24" alt="Logo" />
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
            {menuData.map((menuItem, index) => (
              <li key={index} className="relative">
                {/* Check if the item has a submenu */}
                <a
                  href={menuItem.link}
                  className="block py-2 px-3 text-xl text-gray-200 font-bold border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent"
                >
                  {menuItem.label}
                </a>
                {/* {menuItem?.subMenu ? (
                  <>
                    <button
                      onClick={() => toggleSubMenu(menuItem.label)}
                      className="flex items-center justify-between w-full py-2 px-3 text-xl font-bold text-gray-200 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 "
                    >
                      {menuItem.label}
                      <svg
                        className="w-2.5 h-2.5 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>

                      {activeSubMenu === menuItem.label && (
                      <ul className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md">
                        {menuItem?.subMenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subItem.link}
                              className="block py-2 px-4 text-gray-700"
                            >
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a
                    href={menuItem.link}
                    className="block py-2 px-3 text-xl text-gray-200 font-bold border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent"
                  >
                    {menuItem.label}
                  </a>
                )} */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
