import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { compose } from "redux";

const HeaderFooter = (HocComponent) => {
    return class HeaderFooterComponent extends Component {

        render() {
            return (
                <React.Fragment>                    
                    <nav className="nav">
                        <Link className="nav-link" to={"/dashboard"} >Dashboard</Link>
                        <Link className="nav-link" to={"/superadmin"} >Superadmin</Link>
                        <Link className="nav-link" to={"/admin"} >Admin</Link>
                        <Link className="nav-link" to={"/login"} >Login</Link>
                    </nav>
                    <HocComponent {...this.props} />
                    <footer className="footer">
                        <div className="container">Footer</div>
                    </footer>
                </React.Fragment>
            );
        }
    }
}


const mapStateToProps = state => {
    return {

    };
};

const WithHeaderFooter = compose(
    connect(mapStateToProps, null),
    HeaderFooter
)
export default WithHeaderFooter;