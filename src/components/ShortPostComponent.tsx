import React from 'react'
import { Link } from 'react-router-dom';

interface Props {
    postId: number;
    postTitle: string;
    postBody: string;
}

const ShortPostComponent = ({ postId, postTitle, postBody }: Props) => {

    const titleMaxLength: number = 25;
    const bodyMaxLength: number = 70;

    const reduceString = (text: string, maxLength: number): string => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        } else {
            return text;
        }
    }

    return (
        <div className="short-post">
            <h3 className="short-post--title">{ reduceString(postTitle, titleMaxLength) }</h3>
            <p className="short-post--body">{ reduceString(postBody, bodyMaxLength) }</p>
            <div className="short-post--button-wrapper">
                <Link to={`/posts/${postId}`} className="open-article-button">Full version</Link>
            </div>
        </div>
    );
}

export default ShortPostComponent;
