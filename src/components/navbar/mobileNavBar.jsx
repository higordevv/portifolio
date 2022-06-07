import NavLinks from "./navlinks";
import './navbarstyle.css'
import { ImMenu3 } from 'react-icons/im'
import { FaRegWindowClose } from 'react-icons/fa'
import { useState } from "react";

const MobileNav = () => {

    const [abrir, setOpen] = useState(false)

    const hamburguerIcon = <ImMenu3 className="menu3" size='40px' color="yellow"
        onClick={() => {
            setOpen(!abrir)
        }}
    />

    const closeIcon = <FaRegWindowClose className="close" size='40px' color="yellow"
        onClick={()=>{setOpen(!abrir)}}/>

    const closeMobileMenu = () => setOpen(false)


    return (
        <nav className="MobileNavbar">
            {abrir? closeIcon : hamburguerIcon}
            {abrir && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
        </nav>
    );
}

export default MobileNav;