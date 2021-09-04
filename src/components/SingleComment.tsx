import React from 'react'

interface Props {
    commentAuthor: string;
    commentBody: string;
}

const SingleComment = ({ commentAuthor, commentBody }: Props) => {
    return (
        <div className="single-comment">
            <h5 className="comment-author">{ commentAuthor }</h5>
            <p className="comment-body">{ commentBody }</p>            
        </div>
    );
}

export default SingleComment;
