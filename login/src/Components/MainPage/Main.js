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
import preAxios from '../axios';



function Main() {
    // const [mainInfo, setMainInfo] = useState(null);

    //더미 데이터 시작입니다. ----------------------------------------
    const strengthD = [
        {
            title: '적응(Adaptability)',
            count: 1,
            key: 1,
        },
        {
            title: '복구(Restorative)',
            count: 1,
            key: 2,
        },
        {
            title: '지적사고(Intellection)',
            count: 1,
            key: 3,
        },
        {
            title: '연결성(Connectedness)',
            count: 1,
            key: 4,
        },
        {
            title: '최상화(Maximizer)',
            count: 1,
            key: 5,
        },
    ]
    const startRecord = [{
        title: '업프로젝트',
        record: 1,
        key: 1,  
    },
    {
        title: 'CoP',
        record: 1,
        key: 2,
    },
    {
        title: '직무학습',
        record: 1,
        key: 3,
    },
    {
        title: '특강',
        record: 1,
        key: 4,
    },
    {
        title: '기타',
        record: 1,
        key: 5,
    },
    {
        title: '등등',
        record: 1,
        key: 6,
    },];
    //더미 데이터 끝입니다. ----------------------------------------
    const [getStrength, setGetStrength] = useState(strengthD);
    const [getRecord, setGetRecord] = useState(startRecord);
    const movePage = useNavigate();
    function clickLogout () {
        alert('로그아웃.');
        //url수정 필요
        fetch("http://localhost:8000/logout", {
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
    
    //메인페이지 로딩 시 정보요청입니다.
    // app.get('/main/notice', notice); 알림 --> UserInfo.js에서 NoticeClick함수 실행시 요청합니다.
    // app.get('/main/portfolio', portfolio); 
    // app.get('/main/schedule', schedule);
    // app.get('/main/promise', promise);

    
    // app.post('/main/record', record);
    // --> 한달간의 기록 6개의 카테고리(업프로젝트, CoP, 특강, 직무학습 등등)
    // --> axios요청 GET
    // --> 받아야 할 json 형식 : 
    // [
    //     {
    //         title: '적응(Adaptability)',
    //         count: 1,
    //         key: 1,                           <-- key값은 리액트에서 렌더링할때 구분하기위한 것으로 DB와 상관없이 1부터 차례대로 넣어주시면 됩니다. 
    //     },
    //     {
    //         title: '복구(Restorative)',
    //         count: 1,
    //         key: 2,
    //     },
    //     {
    //         title: '지적사고(Intellection)',
    //         count: 1,
    //         key: 3,
    //     },
    //     {
    //         title: '연결성(Connectedness)',
    //         count: 1,
    //         key: 4,
    //     },
    //     {
    //         title: '최상화(Maximizer)',
    //         count: 1,
    //         key: 5,
    //     },
    // ]
    // 


    // app.get('/main/strength', strength);
    // --> 강점기록 및 강점 적용 횟수
    // --> axios요청 json 형식 : 
    // {
    //     month: int,
    // }
    //
    // --> 받아야 할 json 형식 : 
    // [{
    //     title: '업프로젝트',
    //     record: 1, 
    //     key: 1,              <-- key값은 리액트에서 렌더링할때 구분하기위한 것으로 DB와 상관없이 1부터 차례대로 넣어주시면 됩니다. 
    // },
    // {
    //     title: 'CoP',
    //     record: 1,
    //     key: 2,
    // },
    // {
    //     title: '직무학습',
    //     record: 1,
    //     key: 3,
    // },
    // {
    //     title: '특강',
    //     record: 1,
    //     key: 4,
    // },
    // {
    //     title: '기타',
    //     record: 1,
    //     key: 5,
    // },
    // {
    //     title: '등등',
    //     record: 1,
    //     key: 6,
    // },];
    // 
    // 여기서 주의점 /main/record url은 get이 아니라 post를 써야합니다. 현재 몇달인지 보내야하기 때문입니다. --> req.body.month를 쓰면 int형 1~12가 나옵니다.
    // 아니면 get으로 유지하고 현재 달을 서버에서 new Date()함수를 써서 알아내는 방법도 있습니다.

    useEffect(() => {
        const date = new Date();
        const toMonth = date.getMonth() + 1;
        Promise.all([
            preAxios.post('/main/record', {month: toMonth}),
            preAxios.get('/main/strength'),
        ])
        .then(([recordRes, strengthRes]) => {
            setGetRecord(recordRes.data);
            setGetStrength(strengthRes.data);
        })
        .catch((error) => {
            console.error(error);
        });
        
    },[])


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
                <MonthRecord value={getRecord} />
                
            </div>
            <div className='right-container'>
                <UserInfo onClick={commentClick} infoToggle={infoToggle} strength={getStrength}/>
            </div>
        </div>
    </>
    )
}

export default Main;