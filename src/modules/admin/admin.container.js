import React from 'react';
import { connect } from "react-redux";
import WithHeaderFooter from '../../shared/header_footer.hoc';
import WithSidebar from '../../shared/sidebar.hoc';

const AdminContainer = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    Admin Container
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
    WithHeaderFooter(WithSidebar(AdminContainer))
);