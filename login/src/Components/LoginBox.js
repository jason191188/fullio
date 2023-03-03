import InputLogin from './InputLogin';
import './loginBox.css';
import LoginButton from './LoginButton';
import Logo from './Logo';
import { useState } from 'react';
import WaveA from './WaveA';
import './WaveA.css';
import { useNavigate } from 'react-router-dom';


function LoginBox() {
    const [cancelImgMoveId, setCancelImgMoveId] = useState(0);
    const [cancelImgMovePw, setCancelImgMovePw] = useState(0);
    const [textId, setTextId] = useState('');
    const [textPw, setTextPw] = useState('');
    const [alertIdPw, setAlertIdPw] = useState('');
    const [failLoginId, setFailLoginId] = useState('');
    const [failLoginPw, setFailLoginPw] = useState('');
    const [classNameWave, setClassNameWave] = useState('');
    const [pageLoad, setPageLoad] = useState('');
    const movePage = useNavigate();

    setTimeout(() => {
    setPageLoad('page-load');
    }, 100);
    // let enterKey = '';
    // window.addEventListener('keydown', (e) => {
    //     enterKey = e.key;
    //     if (enterKey === 'Enter') {
    //         loginBtn();
    //     }
    // });
    function cancelImgFocusId() {
        setCancelImgMoveId(1);
        setFailLoginId('');
    }

    function cancelImgBlurId() {
        setCancelImgMoveId(0);
    }
    function cancelImgFocusPw() {
        setCancelImgMovePw(1);
        setFailLoginPw('');
    }

    function cancelImgBlurPw() {
        setCancelImgMovePw(0);
    }

    function resetTextId(e) {
        const inputText = e.target.value;
        setTextId(inputText);
    }
    function resetTextPw(e) {
        const inputText = e.target.value;
        setTextPw(inputText);
    }

    function clearTextId(){
        setTextId('');
    }
    function clearTextPw() {
        setTextPw('');
    }

    function loginBtn() {
      if(textId.length > 0 && textPw.length > 0) {
          fetch("https://43.201.15.119/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              user:textId,
              pw:textPw
          }),
          credentials : "include",
          })
          .then((res) => res.json())
          .then((res) => {
              if(res.success){
                  setClassNameWave('login-wave');
                  setAlertIdPw('');
                  setTimeout(() => {
                      movePage('/main');
                  }, 1000);

              }else {
              setAlertIdPw('아이디/비밀번호를 확인해주세요!')
              setFailLoginPw('fail-login')
              setFailLoginId('fail-login')
              setCancelImgMoveId(2)
              setCancelImgMovePw(2)
              }
          })
          .catch((error) => {
              console.error(new Error("로그인 중 에러 발생"));
          });
      } else if (textId.length === 0 && textPw.length === 0 ) {
          setFailLoginPw('fail-login')
          setFailLoginId('fail-login')
          setCancelImgMoveId(2)
          setCancelImgMovePw(2)
          setAlertIdPw('아이디/비밀번호를 입력해주세요!')
      } else if (textId.length === 0) {
          setFailLoginId('fail-login')
          setCancelImgMoveId(2)
          setAlertIdPw('아이디를 입력해주세요!')
      } else {
          setFailLoginPw('fail-login')
          setCancelImgMovePw(2)
          setAlertIdPw('비밀번호를 입력해주세요!')
      }
      
  }
    let pageLoadClass = `login-container ${pageLoad}`;
    return (
        <>
        <div className={pageLoadClass}>
            <h1>오늘의 나를 담아 내일로,</h1>
            <Logo />
            <InputLogin type='text' className={failLoginId} onClick={clearTextId} onBlur={cancelImgBlurId} onFocus={cancelImgFocusId} value={cancelImgMoveId} text={textId} onChange={resetTextId}>아이디</InputLogin>
            <InputLogin type='password' className={failLoginPw} onClick={clearTextPw} onBlur={cancelImgBlurPw} onFocus={cancelImgFocusPw} value={cancelImgMovePw} text={textPw} onChange={resetTextPw}>비밀번호</InputLogin>
            <span className='alertIdPw'>{alertIdPw}</span>
            <LoginButton onClick={loginBtn}/>
        </div>
        <WaveA className={classNameWave}/>
        </>
    )
}

export default LoginBox;