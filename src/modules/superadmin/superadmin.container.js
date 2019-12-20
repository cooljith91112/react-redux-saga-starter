import React from 'react';
import { connect } from "react-redux";
import WithHeaderFooter from '../../shared/header_footer.hoc';
import WithSidebar from '../../shared/sidebar.hoc';
import { COMMON_REQUEST } from '../../utils/constants';
import HttpService from '../../services/http.service';
const SuperAdminContainer = (props) => {

    const startRequest = () => {
        props.dispatch({
            type: COMMON_REQUEST
        });
        let params = {
            url: 'https://reqres.in/api/users?page=2'
        }
        HttpService.fetch(params).then(res => {
            console.log(res);
        })
    }

    const stopRequest = () => {
        // this.props.dispatch({
        //     type: COMMON_CANCEL
        // })
        HttpService.cancelRequest();
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    SuperAdminContainer
                </div>
            </div>
            <div className="row">
                <div className="col-md-1"><button className="btn btn-primary" onClick={startRequest}>Start Request</button></div>
                <div className="col-md-1"><button className="btn btn btn-danger" onClick={stopRequest}>Stop Request</button></div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {

    };
};

export default connect(mapStateToProps)(
    WithSidebar(WithHeaderFooter(SuperAdminContainer))
);