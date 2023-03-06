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
    background-color: blue;
    display: flex;
    flex-direction: row;
`;
const NoticeBall = styled.div`
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 999rem;
    display: inline-block;
    background-color: #5FC59D;
    margin: 0.9rem 0;
    margin-right: 0.7rem;
`;
const NoticeCommentBox = styled.div`
    width: 20rem;
    height: 3.2rem;
    vertical-align: top;
    overflow: hidden;
`;
const NoticeType = styled.span`
    font-size: 1.2rem;
    color: ${props => props.color};
`;
const NoticeCommentCon = styled.div`
    width: 20rem;
    height: 3.2rem;
    font-size: 1.2rem;
    line-height: 1.2rem;
    color: ${props => props.color};
    display: inline-block;
`;
const DateTag = styled.span`
    font-size: 1rem;
    color: ${COLOR.GSBF};
    margin-right: 0.5rem;
`;
function UserInfo({ onClick, infoToggle }) {
    const [noticeToggle, setNoticeToggle] = useState(false);
    const NoticeImage = NoticeImg;
    const movePage = useNavigate();
    
    function NoticeClick () {
        setNoticeToggle(!noticeToggle);
    }
    function NoticeListBox() {
        return (
            <NoticeListContainer>
                <NoticeBall />
                <NoticeCommentBox>
                    <NoticeType color={'black'}>[알림]</NoticeType>
                    <NoticeCommentCon color={'black'}>이번 주에 있었던 활동을 기록해보세요.</NoticeCommentCon>
                    <DateTag> 오늘</DateTag>
                </NoticeCommentBox>
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
                    <NoticeListBox />
                    <NoticeListBox />
                    <NoticeListBox />
                    <NoticeListBox />
                    <NoticeListBox />
                    <NoticeListBox />
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
            {true ? <RedDot onClick={NoticeClick}/> : null}
            <img src={userInfoImg} className='info-img' alt='프로필 사진' />
            <span>{userInfoName}</span>
            <span className='info-email'>{userInfoEmail}</span>
            <Button value={'마이페이지'} className={'infoMypage'} onClick={moveMypage}/>
            {infoToggle ? <InfoComment value={'변경됨'} onClick={onClick}/> : <InfoComment value={'호락호락'} onClick={onClick}/>}
            <StrongTest />
            <Challenge value={'Zzz'}/>
        </div>
    );
}

export default UserInfo;