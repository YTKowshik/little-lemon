import image from '../assets/images/Logo.svg';
import { Link } from 'react-router-dom';
import globals from '../globals';
const LogoComponent = () => {
    return <div className='flex-row  justify-start'>
        <Link to={globals.NAV_HOME}>
            <img src={image} alt="logo" className='logo-main' />
        </Link>
    </div>
}

export default LogoComponent;