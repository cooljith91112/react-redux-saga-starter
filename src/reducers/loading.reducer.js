export default function LoadingReducer(state = {}, action) {
    console.log("Reducer",action)
    const { type } = action;
    const matches = /(.*)_(REQUEST|SUCCESS|FAILED|ERROR|SUBMIT|CANCEL)/.exec(type);
    if (!matches) return state;
    const [, requestName, requestState] = matches;
    return {
        ...state,
        [requestName]: (requestState === 'REQUEST' || requestState === 'SUBMIT')
    };

}