import React from 'react';
import "./loader.css";
const WithLoader = HocComponent => {
    return function ({ ...props }) {
        return (
            <div className="loader-container">
                {props.isLoading && (
                    <div className="loader"></div>
                )}
                <HocComponent {...props} />
            </div>
        );
    };
};

export default WithLoader;