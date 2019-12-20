import React from 'react';
import { connect } from "react-redux";
import WithFooter from '../../shared/footer.hoc';
import { loginRequest } from '../../actions/login.action';
import LoginComponent from './login.component';
const LoginContainer = (props) => {

    const onLogin = () => {
        let params = {
            email: "eve.holt@reqres.in",
            password: "cityslicka"
        };

        // loginMock(params).then(res=>{
        //     console.log(res);
        // })
        props.dispatch(loginRequest(params));
        // HttpService.cancelRequest();
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <LoginComponent onLogin={onLogin} />
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {

    };
};

export default connect(mapStateToProps)(
    WithFooter(LoginContainer)
);