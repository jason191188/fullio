import styled, { keyframes } from "styled-components"
import COLOR from "./COLOR";



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



function ProgressGraphCom ({ value, color }) {
    const ani = keyframes`
        0% {
            width: 0;
        }
        100% {
            width: ${value * 2}rem;
        }
    
    `
    const ProgressGraph = styled.div`
        width: ${value * 2}rem;
        height: 3.2rem;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 999rem;
        background-color: ${color};
        text-align: right;
        color: ${COLOR.White};
        font-size: 1.6rem;
        line-height: 3.2rem;
        padding-right: 1rem;
        animation: ${ani} 3s both cubic-bezier(0.51, 0.67, 0.23, 0.86);
    `;
    return (
        <ProgressGraph>{value}</ProgressGraph>
    )
}
function ProgressBarContainer ({ value, name, color }) {
    const ProgressTitle = styled.div`
        width: 12rem;
        height: 3.2rem;
        border-radius: 999rem;
        background-color: ${color};
        margin-right: 1.5rem;
        text-align: center;
        font-size: 1.6rem;
        color: ${COLOR.White};
        line-height: 3.2rem;
    `;
    console.log(color);
    return (
        <ProgressBox>
            <ProgressTitle>{name}</ProgressTitle>
            <ProgressBar>
                <ProgressGraphCom value={value} color={color}/>
            </ProgressBar>
        </ProgressBox>
    )
}

export default ProgressBarContainer;