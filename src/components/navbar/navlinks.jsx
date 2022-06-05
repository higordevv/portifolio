import './navbarstyle.css'

const NavLinks = () => {
    return (
        <ul className='navlinks'>
            <li>
                <a href="/#home">Home</a>
            </li>
            <li>
                <a href="/#about">About me</a>
            </li>
            <li>
                <a href="/#projects">Projects</a>
            </li>
            <li>
                <a href="/#contact">Contact</a>
            </li>
        </ul>
    );
}

export default NavLinks;