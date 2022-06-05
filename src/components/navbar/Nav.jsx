import React from 'react'
import './navbarstyle.css'
import NavLink  from './navlinks'
import MobileNav from './mobileNavBar'

const NavigatorBar = () => {
    return(
        <nav className='navbar'>
            <NavLink />
            {/* <MobileNav/> */}
        </nav>
    )
}

export {NavigatorBar} 