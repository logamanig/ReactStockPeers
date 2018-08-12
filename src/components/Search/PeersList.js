import React from 'react';
//import PropTypes from 'prop-types';

import { Row, Alert } from 'reactstrap';

import Page from 'components/Page';
import PeerCard from './PeerCard'


const PeersList = ( { peers } ) => {

    switch(peers.status)
    {
        case 'RECEIVED':
            return(
                <Page title={ "Search Stock Peers " + (peers.symbol ? ' - ' + peers.symbol.toUpperCase() : '') } breadcrumbs={[{ name: 'search', active: true }]}>
                    <Row key={peers.symbol}>
                    {peers.peers.map(peer => (
                        <PeerCard 
                            key={peer.symbol}
                            { ...peer }
                        />
                    ))}
                    </Row>
                </Page>);
        case 'ERROR':
            return (
                <Page title={ "Search Stock Peers " + (peers.symbol ? ' - ' + peers.symbol.toUpperCase() : '') } breadcrumbs={[{ name: 'search', active: true }]}>
                    <Row>
                        <Alert color="danger">
                            { peers.error }
                        </Alert>
                    </Row>
                </Page>);
        case 'REQUESTED':
            return (
                <Page title={ "Search Stock Peers " + (peers.symbol ? ' - ' + peers.symbol.toUpperCase() : '') } breadcrumbs={[{ name: 'search', active: true }]}>
                    <Row>                       
                        <div className="progress col-12">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}></div>
                        </div>
                    </Row>
                </Page>);
        default:
            return (
                <Page title={ "Search Stock Peers " + (peers.symbol ? ' - ' + peers.symbol.toUpperCase() : '') } breadcrumbs={[{ name: 'search', active: true }]}>
                    <Row>
                        <Alert color="danger">
                            Error occured. please try again.
                        </Alert>
                    </Row>
                </Page>);

    }
};

// PeersList.propTypes = {
//     symbol: PropTypes.string.isRequired,
//     peers: PropTypes.arrayOf(PropTypes.shape({
//         symbol: PropTypes.string.isRequired,
//         isFetching: PropTypes.bool.isRequired,
//         peerMetaData: PropTypes.object.isRequired
//     })).isRequired,
//     isFetching: PropTypes.bool.isRequired,
//     status: PropTypes.string.isRequired,
//     error: PropTypes.string.isRequired
// };

export default PeersList;