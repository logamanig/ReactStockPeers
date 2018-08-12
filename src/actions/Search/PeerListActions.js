import ActionTypes from './ActionTypes';

const requestPeers = symbol => ({
    type: ActionTypes.SEARCH_PEERS,
    symbol,
    status: 'REQUESTED',
    isFetching: true,
    peers: [],
    error: ''
});

const receivePeers = (symbol, peers) => ({
    type: ActionTypes.SEARCH_PEERS,
    symbol,
    status: 'RECEIVED',
    isFetching: false,
    peers,
    error: ''
});

const errorReceivingPeers = (symbol, error) => ({
    type: ActionTypes.SEARCH_PEERS,
    symbol,
    status: 'ERROR',
    isFetching: false,
    peers: [],
    error
});

// thunk action creator

const fetchPeers = symbol => {
    return dispatch => {
        dispatch(requestPeers(symbol));

        return fetch('https://api.iextrading.com/1.0/stock/' + symbol + '/peers')
            .then(response => response.json())
            .then(json => {
                    dispatch(receivePeers(symbol, json.map(p => ({
                        symbol: p,
                        isFetching: true,
                        peerMetaData: {}
                    }))))
                },
                error => {
                    dispatch(errorReceivingPeers(symbol, 'Invalid symbol. Please key in a valid symbol.'));
            },
            error => {
                dispatch(errorReceivingPeers(symbol, 'Not found.'));
             });
    }
};

export { requestPeers, receivePeers, errorReceivingPeers, fetchPeers };