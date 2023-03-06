import styled from "styled-components";
import COLOR from "./COLOR";
import BoxShadow from "./StyleComponents";

const ActiveContainer = styled.div`
    background-color: ${COLOR.White};
    border-radius: 0.8rem;
    width: 13.8rem;
    height: 11.5rem;
    ${BoxShadow}
    text-align: center;
    padding: 1.9rem;

    &:nth-child(1) {
        grid-column: 1/2;
        grid-row: 2/3;
    }
    &:nth-child(2) {
        grid-column: 2/3;
        grid-row: 2/3;
    }
    &:nth-child(3) {
        grid-column: 3/4;
        grid-row: 2/3;
    }
`
const Count = styled.span`
    font-size: 3.4rem;
    font-weight: bold;
    display: inline-block;
    margin: 1rem 0;
    margin-bottom: 2rem;
`
const CountEnd = styled.span`
    font-size: 2.4rem;
`

function ActiveCount ({ nameTitle, value }) {
    return (
        <ActiveContainer>
            <Count>{value}</Count><CountEnd>개</CountEnd> <br />
            <span>{nameTitle}</span>
        </ActiveContainer>
    )
}

export default ActiveCount;