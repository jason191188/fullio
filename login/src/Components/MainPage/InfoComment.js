function InfoComment ({ className, value }) {
    const commentClass = `info-comment-container ${className}`;
    const commentContent = `"${value}"`;
    return (
        <div className={commentClass}>
            {commentContent}
        </div>
    )
}

export default InfoComment;