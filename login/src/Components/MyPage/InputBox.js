import styled from "styled-components";

const InputContainer = styled.div`
    width: ${props => props.width};
    display: inline-block;
`;
const Title = styled.h3`
    font-size: 2rem;
    font-weight: 500;
    margin: 0;
    margin-bottom: 1.6rem;
`;
const FloatBox = styled.div`
    display: flex;
    flex-direction: row;
`;
function InputBox ({ width, title, contents }) {
    return (
        <InputContainer width={width}>
            <Title>{title}</Title>
            <FloatBox>
                {contents}
            </FloatBox>
        </InputContainer>
    )
}

export default InputBox;