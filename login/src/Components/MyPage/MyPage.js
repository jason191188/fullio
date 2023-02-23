import { useNavigate } from "react-router-dom";

function MyPage() {
    const movePage = useNavigate();
    function goHome () {
        movePage('/');
    }
    return (
        <>
            <div>마이페이지</div>
            <button onClick={goHome}></button>
        </>
    )
}

export default MyPage;