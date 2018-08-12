import ActionTypes from './ActionTypes';

const requestPeerMd = symbol => ({
    type: ActionTypes.FETCH_PEER_MD,
    symbol,
    status: 'REQUESTED',
    isFetching: true,
    peerMetaData: {},
    error: ''
});

const receivePeerMd = (symbol, peerMetaData) => ({
    type: ActionTypes.FETCH_PEER_MD,
    symbol,
    status: 'RECEIVED',
    isFetching: false,
    peerMetaData,
    error: ''
});

const errorReceivingPeerMd = (symbol, error) => ({
    type: ActionTypes.FETCH_PEER_MD,
    symbol,
    isFetching: false,
    peerMetaData: {},
    error
});

// thunk action creator
const fetchPeerMd = symbol => {
    return dispatch => {
        dispatch(requestPeerMd(symbol));

        return fetch('https://api.iextrading.com/1.0/stock/' + symbol + '/company')
            .then(response => response.json())
            .then(json => {
                    dispatch(receivePeerMd(symbol, json))
                },
                error => {
                    dispatch(errorReceivingPeerMd(symbol, 'Invalid symbol. Please key in a valid symbol.'));
            },
            error => {
                dispatch(errorReceivingPeerMd(symbol, 'Not found.'));
             });
    }
};

export { requestPeerMd, receivePeerMd, errorReceivingPeerMd, fetchPeerMd };