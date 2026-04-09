import React from "react";

const Links = () => {
  const classUnderline = `relative inline-block  transition-colors duration-300 hover:text-gray-200 after:absolute after:left-0 after:bottom-0 
after:h-0.5 after:w-full after:bg-white 
after:scale-x-0 after:origin-left 
after:transition-transform after:duration-300 
hover:after:scale-x-100`;
  return (
    <>
      <ul className="hidden lg:flex  text-white gap-8 font-secondary text-lg ">
        <li>
          {" "}
          <a href="#products" className={`${classUnderline}`}>
            Products
          </a>
        </li>
        <li>
          <a href="#solutions" className={`${classUnderline}`}>
            solutions
          </a>
        </li>
        <li>
          {" "}
          <a href="#resources" className={`${classUnderline}`}>
            Resources
          </a>
        </li>
        <li>
          {" "}
          <a href="#pricing" className={`${classUnderline}`}>
            Pricing
          </a>
        </li>
      </ul>
    </>
  );
};

export default Links;
