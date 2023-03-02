import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoComponent from "#components/logo-component";
import globals from '#src/globals';
import imgCart from '#asset-images/cart.svg';

const NavComponent = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="light" variant="light" className="flex-row w-100">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <LogoComponent></LogoComponent>
            <Link ><img src={imgCart} alt="cart" /></Link>
            <Navbar.Collapse id="navbarScroll" className="text-center">
                <Nav>
                    <NavLink  eventKey="1" as={Link} to={globals.NAV_HOME}>Home</NavLink>
                    <NavLink  eventKey="2" as={Link} to={globals.NAV_ABOUT}>About</NavLink>
                    <NavLink  eventKey="3" as={Link} to={globals.NAV_CONTACT}>Contact</NavLink>
                </Nav>
            </Navbar.Collapse>     
        </Navbar>
    );
}
 
export default NavComponent;