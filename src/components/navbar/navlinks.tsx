import { Link } from "react-router-dom";
import { HTMLAttributes } from "react";
import SwitchLanguage from "../SwitchLanguage";

interface NavLinksProps extends HTMLAttributes<HTMLElement> {}

const NavLinks = ({ className, ...rest }: NavLinksProps) => {
  return (
    <ul className={`flex ${className}`} {...rest}>
      <li>
        <Link to="/">
          <button className="bg-brown-200 px-4 py-2 rounded-md">Home</button>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <button className="bg-brown-200 px-4 py-2 rounded-md">About</button>
        </Link>
      </li>
      <li>
        <Link to="/projects">
          <button className="bg-brown-200 px-4 py-2 rounded-md">
            Projects
          </button>
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
