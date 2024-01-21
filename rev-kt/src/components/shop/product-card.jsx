import { Eye, Heart, ShoppingBag } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";

const ProductCard = ({ productInfo }) => {
  const cardOptions = [
    {
      href: "#",
      label: "Add to cart",
      icon: ShoppingBag,
      action: "",
    },
    {
      href: "#",
      label: "View Details",
      icon: Eye,
      action: "",
    },
    {
      href: "#",
      label: "Add to Wishlist",
      icon: Heart,
      action: "",
    },
  ];

  const dispatch = useDispatch();
  // dispatch(addItem({ ...productInfo, quantity: 1 }));

  return (
    <div className="w-full relative group">
      {/* Image div container */}
      <div className="relative overflow-y-hidden ">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={productInfo.thumbnail}
            className="h-full w-full object-contain lg:h-full lg:w-full"
          />
        </div>
        {/* Tag if the product is new on the store */}
        <div className="absolute top-6 left-8 duration-1000">
          <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
            New
          </span>
        </div>
        {/* Card Options visible on hover */}
        <div className="w-full absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-1000 md:block hidden">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r pt-2">
            {/* Hover items */}
            {cardOptions.map(({ label, action, href, icon: Icon }) => (
              <li
                className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-red-400 flex items-center justify-start gap-2 hover:cursor-pointer pb-1 duration-300 w-full h-6  hover:text-red-400 last:border-b-0"
                key={label}
              >
                {label}
                <span>
                  <Icon />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:max-w-80 py-4 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        {/* Name and price */}
        <div className="flex items-center justify-between font-titleFont md:mb-0 mb-3">
          <h2 className="text-lg text-primeColor font-bold truncate pr-5">
            {productInfo.title}
          </h2>
          <p className="text-[#767676] text-[14px]">${productInfo.price}</p>
        </div>
        <div className="flex items-center justify-between">
          {/* Description */}
          <p className="text-[#767676] text-[14px] truncate pr-5">
            {productInfo.description}
          </p>
          {/* Optiosn btns on smaller screen */}
          <p className="md:hidden flex gap-x-5">
            {cardOptions.map(({ label, action, href, icon: Icon }) => (
              <span
                className="text-[#767676] hover:text-primeColor text-sm font-normal flex items-center justify-center hover:cursor-pointer pb-1 duration-300 w-full h-6  hover:text-red-400 hover:underline"
                key={label}
              >
                <Icon className="fill-zinc-200" />
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
