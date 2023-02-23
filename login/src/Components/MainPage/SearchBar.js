import styled from "styled-components";
import COLOR from "./COLOR";
import searchIcon from "../../image/search.png";

const SearchContainer = styled.div`
    background-color: ${COLOR.White};
    padding: 1.2rem 1.6rem;
    width: 44.8rem;
    height: 5.6rem;
    border: 0.1rem solid ${COLOR.GSD9};
    border-radius: 0.8rem;
    grid-column: 1/4;
    grid-row: 1/2;
    display: flex;
    flex-direction: row;
`;

const InputBox = styled.input`
    border: 1px solid rgba(0, 0, 0, 0);
    width: 35rem;
    margin-left: 0.5rem;

    &:focus {
        outline: none;
    }
`;
const searchImg = searchIcon;

function SearchBar () {
    return (
        <SearchContainer>
            <img src={searchImg} alt='검색아이콘'/>
            <InputBox placeholder='검색...'></InputBox>
        </SearchContainer>
    )
}

export default SearchBar;