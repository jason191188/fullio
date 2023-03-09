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
function MonthRecord ({ value }) {
    const recordColor = ['#7986cc', '#5FC59D', '#B093E7', '#FCCB05', '#81AAE8', '#A8DA3D']
    return (
        <MonthRecordContainer>
            <Span>5/1~27일 기록</Span>
            {value.map((item) => {
                return <ProgressBarContainer key={item.key} value={item.record} name={item.title} color={recordColor[0]}/>
            })}
        </MonthRecordContainer>
    )
}

export default MonthRecord;
