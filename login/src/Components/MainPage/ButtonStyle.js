
import styled from 'styled-components';
import WaveImage from '../../image/wavered.png';
import BoxShadow from './StyleComponents';


const WaveButton = styled.button`
        background-color: #ffffff;
        color: #ec132e;
        background-image: url(${WaveImage});
        background-repeat: no-repeat;
        background-size: cover;
        background-size: 100% 100%;
        background-position-y: 50px;
        border: 1px solid #ec132e;
        transition: 0.4s;
        font-size: 1.6rem;
        width: 21.6rem;
        height: 5.2rem;
        border-radius: 0.8rem;
        cursor: pointer;
        ${BoxShadow}
        margin-top: 1.6rem;

    &:hover {
        color: #ffffff;
        background-position-y: -1000px;
        background-size: 1000% 4000%;
    }
`;

export default WaveButton;