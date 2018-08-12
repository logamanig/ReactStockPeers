import React from 'react';

import { Form, Button } from 'reactstrap';
import { MdSearch } from 'react-icons/lib/md';

import { connect } from 'react-redux';

import { fetchPeers } from '../../actions/Search/PeerListActions';

const SearchInputContainer = ( { dispatch }) => {
    let SearchBox;

    return (
        <Form inline className="cr-search-form" onSubmit={e => { 
            e.preventDefault();
            dispatch(fetchPeers(SearchBox.value));
        }}>
        <MdSearch
            size="20"
            className="cr-search-form__icon-search text-secondary"
        />
        <input
            ref= { node => SearchBox = node }
            type="search"
            className="cr-search-form__input form-control"
            placeholder="Search..."
        />
        <Button
            type="submit"
            placeholder="Search Stock Peers"
        >
        Search Stock Peer</Button>
    </Form>
    );
};

export default connect()(SearchInputContainer);