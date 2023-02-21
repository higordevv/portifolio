import { useState, HTMLAttributes } from "react";
import NavLinks from "./navlinks";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
interface MobileNavbarProps extends HTMLAttributes<HTMLElement> {}

function MobileNavbar({ className, ...rest }: MobileNavbarProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`block ${className} ${rest}`}>
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="p-8 text-4xl text-ice-100"
        >
          <GiHamburgerMenu />
        </button>
      ) : (
        <>
          <button
            onClick={() => setOpen(false)}
            className="m-8 text-4xl bg-ice-100 rounded-lg"
          >
            <GrClose color="#F2F2F2" />
          </button>
          <div className="absolute z-50 ">
            <div className="w-screen h-screen  md:h-1/5 flex justify-center items-center ">
              <NavLinks
                className="flex-col gap-11 text-white w-full h-screen p-20 items-center bg-background bg-opacity-80"
                onClick={() => setOpen(false)}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MobileNavbar;
