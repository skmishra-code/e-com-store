import { Menu, ShoppingBasket, Store, User } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const currentUrl = useLocation().pathname;
  const routes = [
    {
      href: "/",
      label: "Home",
      active: currentUrl === "/",
    },
    {
      href: "/shop",
      label: "Shop",
      active: currentUrl === "/shop",
    },
    {
      href: "/contact",
      label: "Contact",
      active: currentUrl === "/contact",
    },
    {
      href: "/about",
      label: "About",
      active: currentUrl === "/about",
    },
    {
      href: "/journal",
      label: "Journal",
      active: currentUrl === "/journal",
    },
  ];

  return (
    <nav className="w-full fixed shadow-lg z-30 bg-white">
      <div className="flex items-center justify-between h-16 md:px-8 px-4">
        {/* Logo */}
        <div className="">
          <Store className="w-8 h-8" />
        </div>

        {/* Options */}
        <div className="flex md:hidden items-center justify-center gap-x-4">
          <User />
          <ShoppingBasket />
          <Menu />
        </div>

        {/* Links */}
        <div className="md:flex items-center justify-center hidden">
          {routes.map((route) => (
            <Link to={route.href} key={route.label}>
              <span
                className={`flex items-center justify-center w-20 h-6 px-8 border-r hover:font-bold 
                ${route.active && "underline font-bold"} 
                ${route.label === "Journal" && "border-r-0"}
                `}
              >
                {route.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
