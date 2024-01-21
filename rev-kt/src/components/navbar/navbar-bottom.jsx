import { Search, ShoppingBag, User } from "lucide-react";
import React from "react";

const Navbarbottom = () => {
  return (
    <div className="w-full pt-16 bg-stone-200/70">
      <div className="md:px-8 md:py-8 py-8 px-6 flex flex-wrap items-center justify-between">
        {/* Search bar */}
        <div className="flex md:max-w-sm w-full bg-white px-2 py-2">
          <input
            type="text"
            className="focus:outline-none w-full text-lg px-2"
            placeholder="Search for a product"
          />
          <Search className="hover:text-red-400" />
        </div>
        {/* Option Button */}
        <div className="md:flex items-center justify-center space-x-8 hidden ">
          <User className="w-7 h-7" />
          <ShoppingBag className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
};

export default Navbarbottom;
