import './startWave.css'
import UserInfo from './UserInfo';
import './Main.css';
import logoImg from '../../image/LogoImage.png';
import './Button.css';
import WaveButton from './ButtonStyle';
import NavBox from './NavBox';
import CalendarBox from './CalendarBox';
import MonthRecord from './MonthRecord';
import SkillBox from './SkillBox';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';



function Main() {
    // const [mainInfo, setMainInfo] = useState(null);
    const movePage = useNavigate();
    function clickLogout () {
        alert('로그아웃.');
        //url수정 필요
        fetch("http://fullio.kr:8000/logout", {
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
    const [infoToggle, setInfoToggle] = useState(false);
    function commentClick() {
        setInfoToggle(infoToggle => !infoToggle);
    }
    
    // useEffect(() => {
    //     const mainReq = async () => {
    //         try{
    //             const response = await fetch(url);//이쪽 url이 main페이지 최초 요청
    //             const data = await response.json();
    //             setMainInfo(data);
    //         }catch(error){
    //             console.error(error);
    //         }
    //     }
    //     mainReq();
    // }, []);


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
                <CalendarBox></CalendarBox>
                <SkillBox ></SkillBox>
                <MonthRecord ></MonthRecord>
                
            </div>
            <div className='right-container'>
                <UserInfo onClick={commentClick} infoToggle={infoToggle}/>
            </div>
        </div>
    </>
    )
}

export default Main;