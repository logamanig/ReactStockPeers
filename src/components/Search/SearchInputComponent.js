import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from '../../ReduxStore'

import SearchInputContainer from '../../containers/Search/SearchInputContainer'

class SearchInputComponent extends Component {
    render() {
        return (
            <Provider store={store}>
                <SearchInputContainer/>
            </Provider>
        );
    };
}

export default SearchInputComponent;