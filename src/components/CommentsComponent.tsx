import React, { useEffect, useState } from 'react'
import { Comment } from '../models/CommentInterface';
import LoadingComponent from './LoadingComponent';
import SingleComment from './SingleComment';

interface Props {
    postId: string | number;
}

const CommentsComponent = ({ postId }: Props) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    const getCurrentPostComments = async () => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(json => {
                setComments(json);
                setLoading(false);
            });
    }

    useEffect(() => {
        getCurrentPostComments();
    }, []);

    return (
        <div className="comments">
            <h4 className="section-title">Comments:</h4>
            { loading ? <LoadingComponent /> : 
                <ul className="comments-list">
                    { comments.map((el: Comment, idx) => (
                        <li key={ idx }>
                            <SingleComment commentAuthor={ el.name } commentBody={ el.body } />
                        </li>
                    )) }
                </ul>
            }
        </div>
    );
}

export default CommentsComponent;
