import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { compose } from "redux";
import './footer.css';

const Footer = (HocComponent) => {
    return class FooterComponent extends Component {

        render() {
            return (
                <React.Fragment>
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

const WithFooter = compose(
    connect(mapStateToProps, null),
    Footer
)
export default WithFooter;