import { useState, useEffect } from 'react';
import LoginBox from './LoginBox';
import './Button.css';
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
}
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = getCookie('accessToken');
    const refreshToken = getCookie('refreshToken');
    // if (!accessToken || !refreshToken) {
    //   setIsLoading(false);
    //   return;
    // }
    fetch('http://fullio.kr:8000/accesstoken', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      credentials : "include",
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = 'http://fullio.kr/main';
        } else {
          fetch('http://fullio.kr:8000/refreshtoken', {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
            credentials : "include",
          })
            .then((response) => {
              if (response.ok) {
                // 새로운 access token을 발급받은 경우, 메인 페이지로 리디렉션합니다.
                window.location.href = 'http://fullio.kr/main';
              } else {
                setIsLoading(false);
              }
            })
            .catch((error) => {
              console.error(error);
              setIsLoading(false);
            });
        }
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);


  return (
    <div className='root'>
      {isLoading ? <p>유효성 검사 중...</p> : <LoginBox />}
    </div>
  );
}

export default App;