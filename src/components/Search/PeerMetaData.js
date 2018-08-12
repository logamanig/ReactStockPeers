import React from 'react';
import { CardText } from 'reactstrap';

import { connect } from 'react-redux';

import { fetchPeerMd } from '../../actions/Search/PeerMetaDataActions';

const PeerMetaData = ( { symbol, isFetching, peerMetaData, dispatch } ) => {
    if(!isFetching && peerMetaData && peerMetaData.description)
        return (
            <CardText>
                { peerMetaData.description }
            </CardText>
        );
    else if (isFetching)
    {
        dispatch(fetchPeerMd(symbol));
        return (
            isFetching ?
                <div className="progress col-12">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}></div>
                </div>
                :
                <div></div>
        );
    }
    else 
        return(
            <div></div>
        );
};

export default connect()(PeerMetaData);