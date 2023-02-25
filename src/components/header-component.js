
import NavComponent from './nav-component';
import LogoComponent from './logo-component';
const Header= () =>{
    return <header className='flex-row'>
        <LogoComponent></LogoComponent>
        <NavComponent></NavComponent>
    </header>;
};

export default Header;