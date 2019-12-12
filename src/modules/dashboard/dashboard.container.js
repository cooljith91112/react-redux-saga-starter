import React, { Component } from 'react';
import { connect } from "react-redux";
import WithHeaderFooter from '../../shared/header_footer.hoc';
import WithSidebar from '../../shared/sidebar.hoc';
class DashBoardContainer extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        Dashboard
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

export default connect(mapStateToProps)(
    WithSidebar(WithHeaderFooter(DashBoardContainer))
);