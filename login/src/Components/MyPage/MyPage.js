import { useNavigate } from "react-router-dom";
import WaveButton from "../MainPage/ButtonStyle";
import NavBox from "../MainPage/NavBox";
import LogoImg from '../../image/LogoImage.png';
import styled from "styled-components";
import COLOR from "../MainPage/COLOR";
import BoxShadow from "../MainPage/StyleComponents";
import InputBox from "./InputBox";
import ProfileImage from "../../image/Profile.png";
import InfoInput from "./InfoInput";

const NavContainer = styled.div`
    width: 21.6rem;
    height: 73.6rem;
    border-radius: 0.8rem;
    background-color: ${COLOR.White};
    margin: 8.8rem 1.6rem 0;
    ${BoxShadow};
    padding: 4rem 0 0 2.7rem;
`;
const MainContainer = styled.div`
    width: 91.2rem;
    height: 73.6rem;
    background-color: ${COLOR.White};
    margin: 8.8rem 0 0;
    ${BoxShadow};
    border-radius: 0.8rem;
    padding: 4rem 4.8rem;
`;
const Mytitle = styled.h2`
    font-size: 2.4rem;
    line-height: 2.4rem;
    font-weight: 400;
    margin:0;
    margin-bottom: 3.5rem;
`;
const MyBtn = styled.div`
    height: 2.4rem;
    font-size: 2rem;
    line-height: 2.4rem;
    margin-bottom: 2rem;
    cursor: pointer;
    display: inline-block;
    color: ${props => props.active? COLOR.Primary : COLOR.Black};
    ${props => props.active? `border-bottom: 2px solid ${COLOR.Primary}` : ``};
    &:hover {
        color: ${COLOR.Primary};
        border-bottom: 2px solid ${COLOR.Primary};
    }
`;
const ProfileImg = styled.img`
    width: 11.2rem;
    height: 11.2rem;
    border-radius: 999rem;
`;
const ProfileContainer = styled.div`
    width: 11.2rem;
    height: 100%;
    margin-right: 3.2rem;
`;
const InputBoxCon = styled.div`
`;

function MyPageNavBox () {
    return(
        <NavContainer>
            <Mytitle>마이 페이지</Mytitle>
            <MyBtn active={true}>계정 관리</MyBtn>
            <MyBtn active={false}>나의 이력 관리</MyBtn>
        </NavContainer>
    )
}

function BasicInfo () {
    return (
        <>
        <ProfileContainer>
            <ProfileImg src={ProfileImage}/>
        </ProfileContainer>
        <InputBoxCon>
                <InfoInput title={'아이디/인재번호'} value={22207045}/>
                <InfoInput title={'아이디/인재번호'} value={22207045}/>
                <InfoInput title={'아이디/인재번호'} value={22207045}/>
                <InfoInput title={'아이디/인재번호'} value={22207045}/>
                <InfoInput title={'아이디/인재번호'} value={22207045}/>
                <InfoInput title={'아이디/인재번호'} value={22207045}/>
        </InputBoxCon>
        </>
    )
}
function MyMainBox() {
    return (
        <MainContainer>
            <InputBox 
                width={'82.4rem'} 
                title={'기본 정보'} 
                contents={<BasicInfo/>}
            />
        </MainContainer>
    )
}


function MyPage() {
    const movePage = useNavigate();
    function moveMainPage() {
        movePage('/main');
    }
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
    return (
        <>
            <div className='start'></div>
            <div className='main-container'>
                <div className='left-container'>
                    <img className='main-logo-img'  onClick={moveMainPage} src={LogoImg} alt="Fullio Logo" />
                    <NavBox />
                    <WaveButton onClick={clickLogout}>로그아웃</WaveButton>
                </div>
                <MyPageNavBox />
                <MyMainBox />
            </div>
        </>
    )
}

export default MyPage;