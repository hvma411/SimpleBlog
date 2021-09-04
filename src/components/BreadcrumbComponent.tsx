import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GlobalState } from '../redux/state'

const BreadcrumbComponent = () => {
    const currentPostTitle = useSelector(
        (state: GlobalState) => state.currentPostTitle
    );

    return (
        <div className="breadcrumb">
            <h3 className="page-title">
                <Link to="/">Posts</Link>
                { currentPostTitle ? ` > ${currentPostTitle}` : "" }
            </h3>
        </div>
    );
}

export default BreadcrumbComponent;
