import React from 'react';
import { connect } from "react-redux";
import WithHeaderFooter from '../../shared/header_footer.hoc';
import WithSidebar from '../../shared/sidebar.hoc';
import Paginator from '../../shared/paginator.component';

const DashBoardContainer = (props) => {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    Dashboard
                </div>
                <div className="col-md-12">
                    <Paginator
                        totalRecords={30}
                    />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {

    };
};

export default connect(mapStateToProps)(
    WithSidebar(WithHeaderFooter(DashBoardContainer))
);