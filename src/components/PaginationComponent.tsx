import React, { useState } from 'react'

interface Props {
    postsPerPage: number;
    totalPosts: number;
    paginate: (pageNumber: number) => void;
    currentPage: number;
}

const PaginationComponent = ({ postsPerPage, totalPosts, paginate, currentPage }: Props) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return (
        <ul className="pagination-list">
            { pageNumbers.map( num => (
                <li key={ num } className={ currentPage === num ? "active-page" : "" } onClick={ () => paginate(num) }>
                    { num }
                </li>
            )) }
        </ul>
    );
}

export default PaginationComponent;
