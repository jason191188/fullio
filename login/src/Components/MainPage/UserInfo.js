import { useNavigate } from 'react-router-dom';
import Button from './Button';
import InfoComment from './InfoComment';
import './Userinfo.css';
import catImg from '../../image/cat.png';
import StrongTest from './StrongTest';
import Challenge from './Challenge';
import styled from 'styled-components';
import NoticeImg from '../../image/mark_mark.png'
import COLOR from './COLOR';
import { useState } from 'react';

const userInfoName = '오주연/22207045';
const userInfoEmail = '@dongdongthecat';
const userInfoImg = catImg;

const RedDot = styled.div`
    border: 0.3rem solid ${COLOR.White};
    border-radius: 9999px;
    width: 1rem;
    height: 1rem;
    background-color: ${COLOR.Red};
    position: absolute;
    top: 1.8rem;
    right: 1.7rem;
    cursor: pointer;
`;
const ImageT = styled.img`
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    top: 2rem;
    right: 1.7rem;
    cursor: pointer;
`;
const NoticeBoxContainer = styled.div`
    position: absolute;
    top: 4rem;
    right: 2rem;
    width: 25.3rem;
    height: 34.4rem;
    border-radius: 0.8rem;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);
    background-color: ${COLOR.White};
    overflow: hidden;
    transition: 1s;
    padding: 1.6rem;
`;
const NoticeTitleCon = styled.div`
    width: 22.1rem;
    height: 1.6rem;
    display: flex;
    justify-content: space-between;
`;
const NoticeAL = styled.div`
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: 500;
`;
const NoticeAll = styled.div`
    font-size: 1.2rem;
    line-height: 1.6rem;
    cursor: pointer;
    color: ${COLOR.GS14};
`;
const NoticeMainCon = styled.div`
    width: 22.1rem;
    height: 28.2rem;
    overflow: scroll;
    margin-top: 1.4rem;
`;
const NoticeListContainer = styled.div`
    width: 22.1rem;
    height: 3.2rem;
    margin-bottom: 1.8rem;
    display: flex;
    flex-direction: row;
    cursor: pointer;
`;
const NoticeBall = styled.div`
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 999rem;
    display: inline-block;
    background-color: #${props => props.ballColor};
    margin: 0.9rem 0;
    margin-right: 0.7rem;
`;

const NoticeCommentCon = styled.div`
    width: 20rem;
    height: 3.2rem;
    font-size: 1.2rem;
    line-height: 1.2rem;
    color: ${props => props.color? COLOR.GSBF:COLOR.Black};
    display: inline-block;
`;
const DateTag = styled.div`
    font-size: 0.5rem;
    color: ${COLOR.GSBF};
    margin-left: 0.5rem;
    display: inline-block;
`;
const SpanCon = styled.div`
    height: 3.2rem;
    display: inline-block;
    font-size: 1.2rem;
    line-height: 1.6rem;
    white-space: pre-line;
`;
function UserInfo({ onClick, infoToggle, strength}) {
    const [noticeToggle, setNoticeToggle] = useState(false);
    const NoticeImage = NoticeImg;
    const movePage = useNavigate();
    const noticeArray =[
        {
            noticeType: '기록',
            noticeContent: '이번 주에 있었던 활동을 기록해 보세요.',
            date: '오늘',//date는 마지막 등록날짜를 넣어주세요.
            id: 1,
            checked: false,
        },
        {
            noticeType: '일정',
            noticeContent: '신규 일정  \'특강\'이/가 등록되었어요.',
            date: '오늘',
            id: 2,
            checked: false,
        },
        {
            noticeType: '일정',
            noticeContent: '이번 주에 있었던 활동을 기록해 보세요.',
            date: '어제',
            id: 3,
            checked: true,
        },
        {
            noticeType: '챌린지',
            noticeContent: '순위 변동! 바로 확인해 보세요.',
            date: '그저께',
            id: 4,
            checked: true,
        },
        {
            noticeType: '기록',
            noticeContent: '\'김윤석 매니저\'님이 기록을 확인했어요.',
            date: '2월 19일',
            id: 5,
            checked: true,
        },
        {
            noticeType: '기록',
            noticeContent: '\'김윤석 매니저\'님이 댓글을 달았어요.',
            date: '2월 19일',
            id: 6,
            checked: true,
        },
    ];
    

    
    function NoticeClick () {
        setNoticeToggle(!noticeToggle);
        // if(noticeToggle) {
        //     fetch("http://43.200.205.32:8000/notice", {
        //         method: "GET",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         credentials : "include",
        //     })
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setNoticeArray(res);
        //     })
        //     .catch((error) => {
        //         console.error(new Error("알림을 불러오지 못함"));
        //     })
        // }
    }
    function NoticeListBox({ nType, nContent, date, checked }) {
        let ballColor = '';
        if(nType === '일정') {
            ballColor = '5FC59D';
        } else if (nType === '챌린지') {
            ballColor = 'FCCB05';
        } else if (nType === '기록') {
            ballColor = '81AAE8';
        }
        return (
            <NoticeListContainer>
                <NoticeBall ballColor={ballColor}/>
                    <NoticeCommentCon color={checked}>
                        <SpanCon>
                            [{nType}] {nContent}
                            <DateTag>{date}</DateTag>
                        </SpanCon>
                    </NoticeCommentCon>
            </NoticeListContainer>
        )
    }

    function NoticeBox () {
        
        return (
            <NoticeBoxContainer>
                <NoticeTitleCon>
                    <NoticeAL>알림</NoticeAL>
                    <NoticeAll>모두읽음</NoticeAll>
                </NoticeTitleCon>
                <NoticeMainCon>
                    {noticeArray.map((item) => {
                        return (
                            <NoticeListBox 
                            key={item.id}
                            nType={item.noticeType} 
                            nContent={item.noticeContent} 
                            date={item.date}
                            checked={item.checked}/>
                        )
                    })}
                </NoticeMainCon>
            </NoticeBoxContainer>
        )
    }

    function Notice({ onClick }) {
        return (
            <ImageT src={NoticeImage} onClick={onClick}/>
        )
    }

    function moveMypage () {
        movePage('/main/mypage');
    }

    return (
        <div className="userinfo-container container">
            {noticeToggle ? <NoticeBox/> : null}
            <Notice onClick={NoticeClick}/>
            {true ?<RedDot onClick={NoticeClick}/> : null}
            <img src={userInfoImg} className='info-img' alt='프로필 사진' />
            <span>{userInfoName}</span>
            <span className='info-email'>{userInfoEmail}</span>
            <Button 
                value={'마이페이지'} 
                className={'infoMypage'} 
                onClick={moveMypage}
            />
            {infoToggle ?
                <InfoComment value={'변경됨'} onClick={onClick}/> 
                : <InfoComment value={'호락호락'} onClick={onClick}/>
             }
            <StrongTest strength={strength}/>
            <Challenge value={'Zzz'}/>
        </div>
    );
}

export default UserInfo;

