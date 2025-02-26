
import React from 'react'
import PropTypes from "prop-types";
import { Link } from 'react-router';

const Breadcrumb = ({ lists }) => {
    return (
        <>
            <section className="bg-gray-100 py-8 px-4">
                <div className="container mx-auto ">
                    <ul className="breadcrumb">
                        {lists?.map?.((list, index) => {
                            const arias = index === lists?.length ? { "aria-label": "current-page" } : {}
                            return (
                                <li key={list?.url}>
                                    <Link to={list?.url} {...arias}>
                                        {list?.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
        </>
    )
}

Breadcrumb.propTypes = {
    lists: PropTypes.array,
};

export default Breadcrumb