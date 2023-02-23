import CancelImg from '../image/Cancel.png';
import CancelClear from '../image/CancelClear.png';
import CancelClearRed from '../image/CancelRed.png';

const CancelImage = [CancelClear, CancelImg, CancelClearRed];


function LoginCancelBtn({ value = '0', onClick }) {
    return (
        <button className='cancel-container' onClick={onClick}>
            <img src={CancelImage[value]} alt='취소' className='cancel-img'></img>
        </button>
    )
}

export default LoginCancelBtn;