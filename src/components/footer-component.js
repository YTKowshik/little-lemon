import { Link } from "react-router-dom";
import image from '#asset-images/Logo.svg';
import globals from "#src/globals";

const FooterComponent = (props) => {
    return <footer className="w-100 d-flex flex-evenly bg-dark font-white">
        <img width={100} src={image} alt="logo" className='logo-main' />
        <div>© <Link to={globals.NAV_ABOUT}>Little Lemon </Link></div>
    </footer>;
};

export default FooterComponent;