import styled from 'styled-components';
import ChallengeImg from '../../image/challenge_void.png';
import rankImgA from '../../image/rankImgA.png';

const RankListBox = styled.div`
    width: 29.8rem;
    height: 5.6rem;
    border-radius: 0.8rem;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);
    background-color: ${props => !props.first ? '' : '#F5D85E'};
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0.8rem 1.3rem;
    font-size: 1.6rem;

    &:nth-child(3) {
        margin: 1rem 0;
    }
`;
const Span = styled.span`
    margin-right: 0.8rem;
`;
const RankImg = styled.img`
    width: 4rem;
    height: 4rem;
    margin-right: 1.4rem;
`;
const NickName = styled.span`
    width: 10rem;
    height: 2.4rem;
    overflow: hidden;
`;
const Title = styled.div`
    width: 100%;
    height: 3.3rem;
    padding: 0.4rem 0.9rem;
    background-color: #80a391;
    border-radius: 0.8rem;
    text-align: center;
    color: #ffffff;
    margin-bottom: 1.3rem;
`;
function EmptyBox () {
    const challImg = ChallengeImg;
    return (
        <>
            <img className='chall-img' src={challImg} alt='비어있는 사진'/>
            <span>다음 챌린지를 기대해주세요!</span>
        </>
    )
}

function ChallengeRanking ({ first }) {
    return (
        <RankListBox first={first}>
            <Span>1위</Span>
            <RankImg src={rankImgA}/>
            <NickName>노형동불주먹</NickName>
            <span>기록: {109}개</span>
        </RankListBox>
    )
}

function Challenge ({ value }) {
    return (
        <div className="chall-container">
            <Title className="chall-title">
                <span>챌린지🔥</span>
                <span>{value}</span>
            </Title>
            { true ? <ChallengeRanking first={true} /> : <EmptyBox />}
            { true ? <ChallengeRanking first={false} /> : <EmptyBox />}
            { true ? <ChallengeRanking first={false} /> : <EmptyBox />}
        </div>
    )
}

export default Challenge;