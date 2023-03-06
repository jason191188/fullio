import styled from "styled-components"
import COLOR from "./COLOR";
import BoxShadow from "./StyleComponents";
import WavePrimary from "../../image/wavePrimary.png";
const NavContainer =styled.div`
    background-color: ${COLOR.White};
    width: 21.6rem;
    height: 23.3rem;
    border-radius: 0.8rem;
    padding: 2rem 1.6rem;
    ${BoxShadow}
`;
const waveButtonPrimary = WavePrimary;
const Button = styled.button`
    width: 18.4rem;
    height: 5.2rem;
    border: 1px solid ${COLOR.Primary};
    text-align: center:
    line-height: 5rem;
    color: ${COLOR.Primary}; 
    background-color: ${COLOR.White};
    border-radius: 0.8rem;
    font-size: 1.6rem;
    cursor: pointer;
    background-image: url(${waveButtonPrimary});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transition: 0.3s;
    background-position-y: 5rem;

    &:hover {
        color: ${COLOR.White};
        background-position-y: -10rem;
        background-size: 400% 400%;

    }
    &:nth-child(2) {
        margin: 1.7rem 0;
    }
`
function NavBox () {
    return (
        <NavContainer className="nav-container">
            <Button>기록</Button>
            <Button>포트폴리오</Button>
            <Button>공지</Button>
        </NavContainer>
    )
}

export default NavBox;