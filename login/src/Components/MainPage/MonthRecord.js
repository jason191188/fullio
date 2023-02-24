import styled from "styled-components"
import COLOR from "./COLOR";
import ProgressBarContainer from "./ProgressBarContainer";
import BoxShadow from "./StyleComponents";

const MonthRecordContainer = styled.div`
    background-color: ${COLOR.White};
    width: 79.6rem;
    height: 31.9rem;
    border-radius: 0.8rem;
    padding: 1.2rem 1.6rem 0.4rem;
    ${BoxShadow}
    grid-column: 1/3;
    grid-row: 2/3;
`;
const Span = styled.span`
    font-size: 1.6rem;
    line-height: 3.4rem;
`;
function MonthRecord () {
    return (
        <MonthRecordContainer>
            <Span>5/1~27일 기록</Span>
            <ProgressBarContainer value={12} name={'업프로젝트'} color='#7986cc'/>
            <ProgressBarContainer value={26} name={'토익스터디'} color='#5FC59D'/>
            <ProgressBarContainer value={5} name={'CoP'} color='#B093E7'/>
            <ProgressBarContainer value={0} name={'특강'} color='#FCCB05'/>
            <ProgressBarContainer value={10} name={'직무학습'} color='#81AAE8'/>
            <ProgressBarContainer value={5} name={'GA4스터디'} color='#A8DA3D'/>
        </MonthRecordContainer>
    )
}

export default MonthRecord;
