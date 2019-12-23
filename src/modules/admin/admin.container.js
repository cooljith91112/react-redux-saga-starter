import React from 'react';
import { connect } from "react-redux";
import WithHeaderFooter from '../../shared/header_footer.hoc';
import WithLayout from '../../shared/layout.hoc';

const AdminContainer = (props) => {
    return (
        <div className="maincontent_area">
              
        </div>
    );

}

const mapStateToProps = state => {
    return {

    };
};


export default connect(mapStateToProps)(WithLayout(AdminContainer));