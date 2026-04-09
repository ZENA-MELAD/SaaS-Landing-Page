import React from "react";

const SideMenu = () => {
  const classLink = `transition-colors ease-in-out duration-300 hover:text-gray-300 hover:opacity-80`;
  return (
    <>
      <ul className="flex flex-col gap-6 capitalize text-white text-lg font-secondary md:text-xl">
        <li>
          <a
            href="#products"
            className={`${classLink}`}>
            Products
          </a>
        </li>
        <li>
          <a
            href="#solutions"
            className={`${classLink}`}
          >
            solutions
          </a>
        </li>
        <li>
          <a
            href="#resources"
            className={`${classLink}`}
          >
            Resources
          </a>
        </li>
        <li>
          <a
            href="#pricing"
             className={`${classLink}`}
          >
            Pricing
          </a>
        </li>
      </ul>
    </>
  );
};

export default SideMenu;
