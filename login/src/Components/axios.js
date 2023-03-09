import axios from "axios";

axios.defaults.withCredentials = true; //모든 axios요청에서 쿠키를 포함하게 합니다
const preAxios = axios.create({
    baseURL: "http://localhost:8000",//기본 도메인을 설정할 수 있습니다. 
    headers:{
        "Content-Type": "application/json"
    },
    responseType : "json",
})
//axios 전처리 변수


export default preAxios;