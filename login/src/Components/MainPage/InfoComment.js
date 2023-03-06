function InfoComment ({ value, onClick}) {
    const commentContent = `"${value}"`;
    return (
        <div onClick={onClick} className='info-comment-container'>
           {commentContent}
        </div>
    )
}

export default InfoComment;

