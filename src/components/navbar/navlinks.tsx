import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="flex gap-10">
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
