import LogoImg from '../image/Logo.png';

function Logo() {
    return (
        <div className='logo-container'>
            <img className='logo-img' src={LogoImg} alt='로고 fullio'></img>
        </div>
    )
}

export default Logo;