import { Nav, Navbar, NavLink, Button, Modal } from "react-bootstrap";
import { Link, useHref } from "react-router-dom";
import LogoComponent from "../components/logo-component";
import globals from '../globals';
import imgCart from '../assets/images/cart.svg';
import { useState } from "react";
import QRCodeComponent from "./qr-component";

const NavComponent = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const basename = useHref('/');
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" className="flex-row w-100 ">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <LogoComponent></LogoComponent>
            <Link className="d-xs-block d-md-none d-sm-none d-lg-none" ><img src={imgCart} alt="cart" /></Link>
            <Navbar.Collapse id="navbarScroll" className="text-center flex-evenly">
                <Nav>
                    <NavLink eventKey="1" as={Link} to={globals.NAV_HOME}>Home</NavLink>
                    <NavLink eventKey="2" as={Link} to={globals.NAV_ABOUT}>About</NavLink>
                    <NavLink eventKey="3" as={Link} to={globals.NAV_CONTACT}>Contact</NavLink>
                    <Button bsPrefix="btn-qr" onClick={handleShow} >Scan to Login</Button>
                </Nav>
            </Navbar.Collapse>
            <Link className="d-none d-sm-block" ><img src={imgCart} alt="cart" /></Link>
            <Modal show={show} onHide={handleClose} centered >
                <Modal.Header closeButton>
                    <Modal.Title>Scan the QR below to Login</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column justify-center align-center" >
                    <QRCodeComponent value={`${window.location.origin.toString()}${basename}`} ></QRCodeComponent>
                </Modal.Body>
                {/* <Modal.Footer>
                </Modal.Footer> */}
            </Modal>
        </Navbar>
    );
}

export default NavComponent;