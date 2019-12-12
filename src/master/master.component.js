import React from 'react';
import { createLoadingSelector, createNotificationSelector } from '../services/selectors';
import WithLoader from '../shared/loader.hoc';
import { connect } from "react-redux";

let loadingSelector = createLoadingSelector([
    'LOGIN',
    'COMMON'
]);

let errorSelector = createNotificationSelector([
    'LOGIN',
    'COMMON'
]);

const MasterComponent = (props) => {

    return (
        <>
            {props.children}
        </>
    );
}


const mapStateToProps = state => {
    return {
        isLoading: loadingSelector(state),
        error: errorSelector(state)
    };
};

export default connect(mapStateToProps)(
    WithLoader(MasterComponent)
);

