import styled from "styled-components";
import ActiveCount from "./ActiveCount";
import MySkill from "./MySkill";
import SearchBar from "./SearchBar";

const SkillContainer = styled.div`
    width: 44.8rem;
    height: 40.1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: calc((40.1 - (11.5 + 19.4 + 32)))rem 11.5rem 19.4rem;
    grid-gap: 1.6rem;
`;

function SkillBox() {
    
    return (
        <SkillContainer>
            <SearchBar></SearchBar>
            <ActiveCount nameTitle='나의 역량' value={27}></ActiveCount>
            <ActiveCount nameTitle='나의 활동' value={9}></ActiveCount>
            <ActiveCount nameTitle='나의 기록' value={10}></ActiveCount>
            <MySkill ></MySkill>
        </SkillContainer>
    )
}

export default SkillBox;