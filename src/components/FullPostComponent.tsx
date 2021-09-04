import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router'
import { Post } from '../models/PostInterface';
import actions from '../redux/actions';
import CommentsComponent from './CommentsComponent';
import LoadingComponent from './LoadingComponent';

interface Params {
    postId: string;
}

const FullPostComponent = () => {
    const [currentPost, setCurrentPost] = useState<Post>();
    const [loading, setLoading] = useState(true);

    const { postId }: Params = useParams();

    const dispatch = useDispatch();

    const getCurrentPost = async () => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(json => {
                setCurrentPost(json);
                setLoading(false);
            });
    }

    const setGlobalCurrentPostTitle = (title: string | undefined) => {
        dispatch(actions.setCurrentPostTitle(title))
    }

    useEffect(() => {
        getCurrentPost();
    }, [])

    useEffect(() => {
        setGlobalCurrentPostTitle(currentPost?.title);

        return () => {
            setGlobalCurrentPostTitle("");
        }
    }, [currentPost])

    return (
        <>
            { loading ? <LoadingComponent /> : 
            <div className="full-post-container">
                <div className="full-post">
                    <h3 className="full-post--title">{ currentPost?.title }</h3>
                    <p className="full-post--body">{ currentPost?.body }</p>
                </div>
                <CommentsComponent postId={ postId } />
            </div>
            }
        </>
    );
}

export default FullPostComponent;
