import React, { useEffect, useState } from 'react'
import { Post } from '../models/PostInterface';
import LoadingComponent from './LoadingComponent';
import PaginationComponent from './PaginationComponent';
import ShortPostComponent from './ShortPostComponent'


const MainComponent = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(20);
    const [loading, setLoading] = useState(true);

    const getPosts = async () => {
        await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                setPosts(json);
                setLoading(false);
            });
    }

    useEffect(() => {
        getPosts()
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <main className="main">
            <PaginationComponent postsPerPage={ postsPerPage } totalPosts={ posts.length } paginate={ paginate } currentPage={ currentPage } />
            { loading ? <LoadingComponent /> : 
                <ul>
                    { currentPosts.map((el: Post, idx) => (
                        <li key={ idx }>
                            <ShortPostComponent postId={ el.id } postTitle={ el.title } postBody={ el.body } />
                        </li>
                    )) }
                </ul>
            }
            <PaginationComponent postsPerPage={ postsPerPage } totalPosts={ posts.length } paginate={ paginate } currentPage={ currentPage } />
        </main>
    );
}

export default MainComponent;
