import LoginCancelBtn from "./LoginCancelBtn";


function InputLogin({ className, onClick, children = 'Textfield', type = 'text', onBlur ='', onFocus = '', value = '', text = '', onChange = '' }) {
    const classNameFail = `input-login-container ${className}`;
    return (
        <div className={classNameFail}>
            <input type={type} placeholder={children} className="input-login" onFocus={onFocus} onBlur={onBlur} value={text} onChange={onChange}></input>
            <LoginCancelBtn value={value} onClick={onClick} />
        </div>
    )
}

export default InputLogin;