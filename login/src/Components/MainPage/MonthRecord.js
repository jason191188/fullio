import styled from "styled-components"
import COLOR from "./COLOR";
import BoxShadow from "./StyleComponents";

const MonthRecordContainer = styled.div`
    background-color: ${COLOR.White};
    width: 79.6rem;
    height: 31.9rem;
    border-radius: 0.8rem;
    padding: 2rem 1.6rem;
    ${BoxShadow}
    grid-column: 1/3;
    grid-row: 2/3;
`;
function MonthRecord () {
    return (
        <MonthRecordContainer>

        </MonthRecordContainer>
    )
}

export default MonthRecord;