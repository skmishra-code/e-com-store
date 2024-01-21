import React from "react";
import Breadcrumbs from "../bread-crumbs";

const PageHeader = ({ title }) => {
  return (
    <div className="flex flex-col items-start justify-center mt-5 mb-10 px-4 w-full">
      <h2 className="text-5xl font-extrabold text-zinc-700 leading-relaxed">
        {title}
      </h2>
      <Breadcrumbs/>
    </div>
  );
};

export default PageHeader;
