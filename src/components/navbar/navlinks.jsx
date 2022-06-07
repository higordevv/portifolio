import './navbarstyle.css'
import {motion} from 'framer-motion'

const NavLinks = (props) => {
    const animateFrom = {
        opacity: 0,
        y: -40
    }

    const animateTo = {
        opacity: 1,
        y:0
    }

    return (
        <ul className='navlinks'>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.05}}
            onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/#home">Home</a>
            </motion.li>
            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.10}}onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/#about">About me</a>
            </motion.li>
            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.20}}
            onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/#projects">Projects</a>
            </motion.li>
            <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.30}}
            onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/#contact">Contact</a>
            </motion.li>
        </ul>
    );
}

export default NavLinks;