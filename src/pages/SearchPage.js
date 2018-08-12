import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../ReduxStore';
import ShowPeersList from '../containers/Search/ShowPeersList';

class SearchPage extends Component {
    render() {
        return (
            <Provider store={store}>
                <ShowPeersList />
            </Provider>
        );
    };
};

export default SearchPage;