import React from "react";

const Footer = () => {
  const shopLinks = [
    {
      href: "#",
      label: "Accessories",
    },
    {
      href: "#",
      label: "Clothes",
    },
    {
      href: "#",
      label: "Electornics",
    },
    {
      href: "#",
      label: "Home appliances",
    },
    {
      href: "#",
      label: "New Arrivals",
    },
  ];
  return (
    <div className="w-full bg-zinc-100/40 py-10 px-8 border-t">
      <div className="max-w-conatiner w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-x-10 gap-y-12">
        {/* Site Info */}
        <div className="flex flex-col items-start justify-center sm:col-span-2">
          <h3 className="text-2xl font-bold tracking-tight mb-3">Store</h3>
          <p className="tracking-tight max-w-xl w-full">
            Something about the store which attract people to trust mnc.
            Something about the store which attract people to trust mnc.
            Something about the store which attract people to trust mnc.
          </p>
          <button className="underline text-red-400 text-sm tracking-tighter">
            Read more..
          </button>
        </div>
        {/* Shop Links */}
        <div>
          <h3 className="text-xl font-bold mb-3">Shop</h3>
          <ul className="flex flex-col items-start justify-center">
            {shopLinks.map((link) => (
              <li className="tracking-normal leading-relaxed text-sm text-gray-500 hover:text-zinc-900 hover:underline cursor-pointer" key={link.label}>
                {link.label}
              </li>
            ))}
          </ul>
        </div>
        {/* Account links */}
        <div>
          <h3 className="text-xl font-bold mb-3">Account</h3>
          <ul className="flex flex-col items-start justify-center">
            {shopLinks.map((link) => (
              <li className="tracking-normal leading-relaxed text-sm text-gray-500 hover:text-zinc-900 hover:underline cursor-pointer" key={link.label}>
                {link.label}
              </li>
            ))}
          </ul>
        </div>
        {/* Terms and policy links */}
        <div>
          <h3 className="text-xl font-bold mb-3">Terms and Policies</h3>
          <ul className="flex flex-col items-start justify-center">
            {shopLinks.map((link) => (
              <li className="tracking-normal leading-relaxed text-sm text-gray-500 hover:text-zinc-900 hover:underline cursor-pointer" key={link.label}>
                {link.label}
              </li>
            ))}
          </ul>
        </div>
        {/* News letter */}
        <div className="flex flex-col justify-center items-center sm:col-span-2 gap-3">
          <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
          <input
            type="text"
            className="focus:outline-none border-b w-full bg-transparent"
            placeholder="Enter your email"
          />
          <button className="px-3 py-2 bg-white border text-sm hover:bg-black  hover:text-white">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
