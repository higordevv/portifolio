import React, { HTMLAttributes } from "react";
import NavLinks from "./navlinks";

interface NavbarProps extends HTMLAttributes<HTMLElement> {}

function Navbar({ className, ...rest }: NavbarProps) {
  return (
    <header
      className={`flex-col justify-center items-center ${className}`}
      {...rest}
    >
      <nav className="h-20 flex justify-center items-center text-ice-100">
        <NavLinks className="gap-8" />
      </nav>
      <hr className="w-1/2 bg-yellow-200 h-1 rounded-lg border-none" />
    </header>
  );
}

export default Navbar;
