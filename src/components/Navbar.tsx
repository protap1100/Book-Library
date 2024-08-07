import React from "react";
import { Link } from "react-router-dom";

// Define a TypeScript interface for the nav link
interface NavLink {
  name: string;
  path: string;
}

const Navbar: React.FC = () => {
  // Define an array of nav links with the NavLink type
  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/product" },
    { name: "About Us", path: "/about-us" },
  ];

  return (
    <nav className="mt-5">
      <ul className="flex gap-5 justify-center items-center">
        {navLinks.map((nav, index) => (
          <li key={index}>
            <Link
              className="p-2 bg-red-200 rounded hover:border-b-2 hover:border-black"
              to={nav.path}
            >
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
