import './startWave.css'
import UserInfo from './UserInfo';
import './Main.css';
import logoImg from '../../image/LogoImage.png';
import './Button.css';
import WaveButton from './ButtonStyle';
import NavBox from './NavBox';
import Calendar from './Calendar';
import MonthRecord from './MonthRecord';
import SkillBox from './SkillBox';
import { useNavigate } from 'react-router-dom';


function Main() {
    const movePage = useNavigate();
    function clickLogout () {
        alert('로그아웃.');
        fetch("https://43.200.9.209:8000/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials : "include",
        })
        .then((res) => res.json())
        .then((res) => {
            movePage('/');
        })
        .catch((error) => {
            console.error(new Error("로그아웃 중 에러 발생"));
        });
    }

    const logo = logoImg;
    return (
    <>
        <div className='start'></div>
        <div className='main-container'>
            <div className='left-container'>
                <img className='main-logo-img' src={logo} alt="Fullio Logo" />
                <NavBox />
                <WaveButton onClick={clickLogout}>로그아웃</WaveButton>
            </div>
            <div className='cneter-container'>
                <Calendar></Calendar>
                <SkillBox></SkillBox>
                <MonthRecord></MonthRecord>
                
            </div>
            <div className='right-container'>
                <UserInfo />
            </div>
        </div>
    </>
    )
}

export default Main;