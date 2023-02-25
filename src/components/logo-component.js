import image from '../logo.svg';
const LogoComponent=()=>{
    return <div className='flex-1'>
        <img width={35} height={35} src={image} alt="logo" />
        <button className='btn-Logo'>Company Name</button>
    </div>
}

export default LogoComponent;