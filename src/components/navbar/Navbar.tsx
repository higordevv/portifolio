import React from "react";
import NavLinks from "./navlinks";

function Navbar() {
  return (
    <header className="flex flex-col justify-center items-center">
      <nav className="h-20 flex justify-center items-center text-ice-100">
        <NavLinks />
      </nav>
      <hr className="w-1/2 bg-yellow-200 h-1 rounded-lg border-none" />
    </header>
  );
}

export default Navbar;
