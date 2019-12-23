import React from 'react';

const Sidebar = (props) => {

    return (
        <div className="left_menu">
            <div className="side-icon mt-3">
                <i className="fas fa-th-large"></i>
            </div>
            <div className="side-icon mt-3">
                <i className="fas fa-ticket-alt"></i>
            </div>
            <div className="side-icon mt-3">
                <i className="fas fa-users-cog"></i>
            </div>
            <div className="side-icon mt-3">
                <i className="fas fa-cog"></i>
            </div>
        </div>
    );
};

export default Sidebar;