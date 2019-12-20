import React from 'react';

const LoginComponent = (props) => {

    const onLogin = ()=>{
        props.onLogin();
    };

    return (
        <>
            <div className="col-md-12">
                Login
            </div>
            <div className="col-md-12">
                <button className="btn btn-primary" onClick={onLogin}>Login</button>
            </div>
        </>
    );
}

export default LoginComponent;