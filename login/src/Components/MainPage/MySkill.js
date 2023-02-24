import styled, { keyframes } from "styled-components";
import COLOR from "./COLOR";
import BoxShadow from "./StyleComponents";

const MySkillContainer = styled.div`
    width: 44.8rem;
    height: 19.4rem;
    border-radius: 0.8rem;
    ${BoxShadow}
    background-color: ${COLOR.White};
    grid-column: 1/4;
    grid-row: 3/4;
    padding: 1.6rem;
`;
const H2 = styled.h2`
    font-size: 20px;
    font-weight: 400;
    margin: 0;
`;
const GraphContainer = styled.div`
    width: 6.5rem;
    height: 6.5rem;
    // background-color: ${COLOR.GSF0};
    position: relative;
    margin: 0 auto;
    margin-bottom: 1.5rem;
`;


function ProgressCircle ({ value }) {
    const calcValue = (100 - value) * 1.6;
    const CircleFrame = keyframes`
        0%{
            stroke-dashoffset: 160;
        }
        100% {
            stroke-dashoffset: ${calcValue};
        }
    `
    const GraphCircle = styled.circle`
        fill: transparent;
        stroke: ${COLOR.Primary};
        stroke-width: 1.2rem;
        -webkit-text-stroke-dasharray: 105px;
        stroke-dasharray: 160;
        stroke-dashoffset: ${calcValue};
        stroke-linecap: round;
        transform: rotate(-90deg);
        transform-origin: center center;
        animation: ${CircleFrame} 2s both linear;
    `;
    return(
        <GraphCircle cx='32.5' cy='32.5' r='26'/>
    )
}


function SkillGraph ({ value, title }) {
    const ValueG = styled.div`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);   
    `;
    const GraphTitle = styled.div`
        font-size: 1.6rem;
        text-align: center;
    `;
    const Div = styled.div`
        display: flex;
        flex-direction: column;
    `;
    return(
        <Div>
        <GraphContainer>
            <svg width='65px' height='65px'>
                <ProgressCircle value={value}/>
            </svg>
            <ValueG>{value}%</ValueG>
        </GraphContainer>
        <GraphTitle>{title}</GraphTitle>
        </Div>
    )
}

function MySkill() {
    const Float = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 2rem;
    `;

    return (
        <MySkillContainer>
            <H2>My Skills</H2>
            <Float>
                <SkillGraph value={0} title={'글자넘칠...'}></SkillGraph>
                <SkillGraph value={50} title={'포토샵'}></SkillGraph>
                <SkillGraph value={80} title={'일러스트레이터'}></SkillGraph>
                <SkillGraph value={100} title={'워드'}></SkillGraph>
            </Float>
        </MySkillContainer>
    )
}

export default MySkill;