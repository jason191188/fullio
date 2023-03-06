import styled, { keyframes } from "styled-components"
import COLOR from "./COLOR";


function ProgressGraphCom ({ value, color }) {
    return (
        <ProgressGraph ani={ani} color={color} value={value}>{value}</ProgressGraph>
    )
}
function ProgressBarContainer ({ value, name, color }) {
    return (
        <ProgressBox>
            <ProgressTitle color={color}>{name}</ProgressTitle>
            <ProgressBar>
                <ProgressGraphCom value={value} color={color}/>
            </ProgressBar>
        </ProgressBox>
    )
}

const ProgressBar = styled.div`
    width: 62rem;
    height: 3.2rem;
    border-radius: 999rem;
    background-color: ${COLOR.GSF0};
    box-shadow: inset 0px 3px 7px rgba(0, 0, 0, 0.2);
    position: relative;
`;
const ProgressBox = styled.div`
    width: 75.5rem;
    height: 3.2rem;
    display: flex;
    flex-direction: row;
    margin-bottom: 1.2rem;
`;
const ProgressGraph = styled.div`
    width: ${props => (props.value === 0) ? 2 : props.value * 2}rem;
    height: 3.2rem;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 999rem;
    background-color: ${props => props.color};
    text-align: right;
    color: ${COLOR.White};
    font-size: 1.6rem;
    line-height: 3.2rem;
    padding-right: ${props => (props.value === 0) ? 0.5 : 1}rem;
    animation: ${props => props.ani} 3s both cubic-bezier(0.51, 0.67, 0.23, 0.86);
`;
const ani = keyframes`
    0% {
        width: 2rem;
    }
    100% {
        width: ${props => props.value * 2}rem;
    }
    
`;
const ProgressTitle = styled.div`
    width: 12rem;
    height: 3.2rem;
    border-radius: 999rem;
    background-color: ${props => props.color};
    margin-right: 1.5rem;
    text-align: center;
    font-size: 1.6rem;
    color: ${COLOR.White};
    line-height: 3.2rem;
`;


export default ProgressBarContainer;