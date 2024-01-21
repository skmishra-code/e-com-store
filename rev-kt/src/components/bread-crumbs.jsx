import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { useLocation } from "react-router-dom";

const Breadcrumbs = ({ prevLocation, title }) => {
  // Get current location and save if in state
  const location = useLocation();
  const [locationPath, setLocationPath] = useState("");
  useEffect(() => {
    setLocationPath(location.pathname.split("/")[1]);
  }, [location]);

  return (
    <div className="w-full pb-3 flex flex-col gap-3">
      <h1 className="text-5xl text-primeColor font-titleFont font-bold">
        {title}
      </h1>
      <p className="text-sm font-normal text-lightText capitalize flex items-center">
        <span> {prevLocation === "" ? "Home" : prevLocation}</span>
        <span className="">
          <ChevronRight />
        </span>
        <span className="capitalize font-semibold text-stone-400">
          {locationPath}
        </span>
      </p>
    </div>
  );
};

export default Breadcrumbs;
