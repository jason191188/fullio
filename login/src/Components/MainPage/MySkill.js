import styled from "styled-components";
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
    background-color: ${COLOR.GSF0};
`;
function DSkillgraph () {
    
}
function SkillGraph () {
    return(
        <GraphContainer>
            <svg>
                <circle cx='50' cy='50' r='50'></circle>
                <circle cx='50' cy='50' r='50'></circle>
            </svg>
        </GraphContainer>
    )
}

function MySkill() {
    return (
        <MySkillContainer>
            <H2>My Skills</H2>
            <SkillGraph></SkillGraph>
        </MySkillContainer>
    )
}

export default MySkill;