import { useState } from "react";
import styled from "styled-components";
import COLOR from "../MainPage/COLOR";

const InputCon = styled.div`
    display: inline-block;
    width: 32rem;
`;
const Title = styled.h3`
    font-size: 1.4rem;
    line-height: 1.4rem;
    margin: 0;
    margin-bottom: 0.8rem;
`;
const InputBox = styled.div`
    width: 32rem;
    height: 4.2rem;
    padding: 0.9rem 1.2rem;
    border: 1px solid ${COLOR.GSD9};
    border-radius: 0.8rem;
`;
const Input = styled.input`
    width: 25.9rem;
    height: 2.4rem;
    font-size: 1.4rem;
    border: none;

    &:focus {
        border: none;
    }
`;

function InfoInput ({ title, value }) {
    const [text, setText] = useState('');
    function onCh (e) {
        const texte = e.target.value;
        setText(texte);
    }
    return (
        <InputCon>
            <Title>{title}</Title>
            <InputBox>
            <Input value={text} onChange={onCh}></Input>
            </InputBox>
        </InputCon>
    )
}

export default InfoInput;