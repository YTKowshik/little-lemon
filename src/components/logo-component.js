import image from '#asset-images/Logo.svg';
const LogoComponent=()=>{
    return <div className='flex-row  justify-start'>
        <img src={image} alt="logo" className='logo-main' />
    </div>
}

export default LogoComponent;