import ActionTypes from '../../actions/Search/ActionTypes';

const initialState = { 
    symbol: '',
    peers: [],
    isFetching: false,
    status: 'RECEIVED',
    error: ''
};

const peers = (state = initialState, action) => {
    switch(action.type)
    {
        case ActionTypes.SEARCH_PEERS:
            return {
                symbol: !action.symbol ? '' : action.symbol,
                peers: action.peers,
                isFetching: action.isFetching,
                status: action.status,
                error: action.error
            };

        case ActionTypes.FETCH_PEER_MD:
            if(!state.peers) return state;
            let newState = state;
            newState.peers = newState.peers.map(peer => 
                (peer.symbol.toUpperCase() === action.symbol.toUpperCase()) ? {...peer, isFetching: false, peerMetaData: action.peerMetaData} : peer
            );

            return {...newState};

        default:
            return state;
    }    
}

export default peers;