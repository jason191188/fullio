import styled from "styled-components"
import BoxShadow from "./StyleComponents";
import COLOR from "./COLOR";
import CalendarImg from "../../image/calendar.png";

const calImg = CalendarImg;
const CalendarContainer = styled.div`
    background-color: ${COLOR.White};
    width: 33.2rem;
    height: 40.1rem;
    border-radius: 0.8rem;
    padding: 2rem 1.6rem;
    ${BoxShadow}
    grid-column: 1/2;
    grid-row: 1/2;
    background-image: url(${calImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-
`;

function Calendar () {
    return (
        <CalendarContainer>
        </CalendarContainer>
    )
}

export default Calendar;