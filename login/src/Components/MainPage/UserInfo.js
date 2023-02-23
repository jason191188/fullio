import { useNavigate } from 'react-router-dom';
import Button from './Button';
import InfoComment from './InfoComment';
import './Userinfo.css';
import catImg from '../../image/cat.png';
import StrongTest from './StrongTest';
import Challenge from './Challenge';
const infoName = '오주연/22207045';
const infoEmail = '@dongdongthecat';
const infoImg = catImg;


function UserInfo() {

    const movePage = useNavigate();
    function moveMypage () {
        movePage('/main/mypage');
    }

    return (
        <div className="userinfo-container container">
            <img src={infoImg} className='info-img' alt='프로필 사진'></img>
            <span>{infoName}</span>
            <span className='info-email'>{infoEmail}</span>
            <Button value={'마이페이지'} className={'infoMypage'} onClick={moveMypage}/>
            <InfoComment className={''} value={'세상은 호락호락하지 않다. 괜찮다. 나도 호락호락하지 않으니깐...!'}/>
            <StrongTest />
            <Challenge value={'Zzz'}/>
        </div>
    );
}

export default UserInfo;