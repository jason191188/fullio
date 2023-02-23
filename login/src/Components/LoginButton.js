function LoginButton({className = 'loginBtn', onClick }) {
    return(
        <button className={className} onClick={onClick}>로그인</button>
    )
}

export default LoginButton;