import styled from "styled-components"
import BoxShadow from "./StyleComponents";
import COLOR from "./COLOR";

const CalendarContainer = styled.div`
    background-color: ${COLOR.White};
    width: 33.2rem;
    height: 40.1rem;
    border-radius: 0.8rem;
    padding: 2rem 1.6rem;
    ${BoxShadow}
    grid-column: 1/2;
    grid-row: 1/2;
`;

function Calendar () {
    return (
        <CalendarContainer>

        </CalendarContainer>
    )
}

export default Calendar;