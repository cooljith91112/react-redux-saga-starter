import React, { Component } from 'react';
import { connect } from "react-redux";
import WithFooter from '../../shared/footer.hoc';
import { loginMock } from './login.service';
import { loginRequest } from '../../actions/login.action';
import HttpService from '../../services/http.service';
class LoginContainer extends Component {

    state = {

    };

    onLogin = ()=>{
        let params = {
            email: "eve.holt@reqres.in",
            password: "cityslicka"
        };

        // loginMock(params).then(res=>{
        //     console.log(res);
        // })
        this.props.dispatch(loginRequest(params));
        // HttpService.cancelRequest();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        Login
                    </div>                    
                    <div className="col-md-12">
                        <button className="btn btn-primary" onClick={this.onLogin}>Login</button>
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
    WithFooter(LoginContainer)
);