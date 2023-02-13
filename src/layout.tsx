import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

export default function Layout() {
  return (
    <div className="w-screen h-screen bg-background">
      <div>
        <Navbar />
      </div>
      <div className="m-0 p-0 flex flex-col justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}
