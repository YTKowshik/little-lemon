import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoComponent from "../components/logo-component";
import globals from '../globals';
import imgCart from '../assets/images/cart.svg';

const NavComponent = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" className="flex-row w-100 ">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <LogoComponent></LogoComponent>
            <Link className="d-xs-block d-md-none d-sm-none d-lg-none" ><img src={imgCart} alt="cart" /></Link>
            <Navbar.Collapse id="navbarScroll" className="text-center flex-evenly">
                <Nav>
                    <NavLink  eventKey="1" as={Link} to={globals.NAV_HOME}>Home</NavLink>
                    <NavLink  eventKey="2" as={Link} to={globals.NAV_ABOUT}>About</NavLink>
                    <NavLink  eventKey="3" as={Link} to={globals.NAV_CONTACT}>Contact</NavLink>
                </Nav>
            </Navbar.Collapse>
            <Link className="d-none d-sm-block" ><img src={imgCart} alt="cart" /></Link>
        </Navbar>
    );
}
 
export default NavComponent;