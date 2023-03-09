
import { useState, useEffect } from 'react';
import LoginBox from './LoginBox';
import './Button.css';
import preAxios from './axios';
import { useNavigate } from 'react-router-dom';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const movePage = useNavigate();

  useEffect(() => {
      preAxios.get('/accesstoken')
      .then((res) => {
        if (res.status === 200) {//fetch함수 사용시 res.ok로 status 200~299를 감지하지만 axios는 직접 res.status로 값을 가져와야 합니다.
          console.log(res);
          // window.location.href = 'http://localhost:3000/main';
          movePage('/main');
        } else {
          preAxios.get("/refreshtoken")
            .then((res) => {
              if (res.status === 200) {//fetch함수 사용시 res.ok로 status 200~299를 감지하지만 axios는 직접 res.status로 값을 가져와야 합니다. 
                // 새로운 access token을 발급받은 경우, 메인 페이지로 리디렉션합니다.
                // window.location.href = 'http://localhost:3000/main';
                movePage('/main');//위 주석보다 navigation이 사용성이 좋습니다. 
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
  }, [movePage]);


  return (
    <div className='root'>
      {isLoading ? <p>유효성 검사 중...</p> : <LoginBox />}
    </div>
  );
}

export default App;