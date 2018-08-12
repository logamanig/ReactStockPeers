import { connect } from 'react-redux';

import PeersList from '../../components/Search/PeersList';

const mapStateToProps = state => {
    return ({ peers: state.peers }) };

export default connect(mapStateToProps)(PeersList);