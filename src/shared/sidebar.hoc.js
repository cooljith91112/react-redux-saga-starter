import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import './sidebar.css';

const Sidebar = (HocComponent) => {
    return class SidebarComponent extends Component {

        render() {
            return (
                <React.Fragment>
                    <div className="sidebar">
                        Sidebar
                    </div>
                    <div className="content">
                        <HocComponent {...this.props} />
                    </div>
                </React.Fragment>
            );
        }
    }
}


const mapStateToProps = state => {
    return {

    };
};

const WithSidebar = compose(
    connect(mapStateToProps, null),
    Sidebar
)
export default WithSidebar;