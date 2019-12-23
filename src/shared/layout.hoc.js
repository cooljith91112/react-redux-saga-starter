import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Sidebar from "./sidebar";
import Header from "./header";

const Layout = (HocComponent) => {
    return class SidebarComponent extends Component {

        render() {
            return (
                <React.Fragment>
                    <Header />
                    <div className="container-fluid content_area">
                        <div className="row full-height">
                            <Sidebar />
                            <HocComponent {...this.props} />
                        </div>
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

const WithLayout = compose(
    connect(mapStateToProps, null),
    Layout
)
export default WithLayout;