import { Outlet } from "react-router-dom";
import MobileNavbar from "./components/navbar/MobileNavbar";
import Navbar from "./components/navbar/Navbar";

export default function Layout() {
  return (
    <div className="w-screen h-screen bg-background">
      <div>
        <Navbar className="hidden md:flex" />

        <MobileNavbar className="md:hidden" />
      </div>
      <div className="m-0 p-0 flex flex-col justify-center items-center max-w-screen max-h-screen">
        <Outlet />
      </div>
    </div>
  );
}
