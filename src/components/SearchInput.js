import React from 'react';

import SearchInputComponent from './Search/SearchInputComponent';

import { Form } from 'reactstrap';
import { MdSearch } from 'react-icons/lib/md';

const SearchInput = () => {
  if(window.location.toString().indexOf('/search') > -1)
    return (<SearchInputComponent/>);

  return(
    <Form inline className="cr-search-form" onSubmit={e => { e.preventDefault(); }}>
        <MdSearch
          size="20"
          className="cr-search-form__icon-search text-secondary"
        />
        <input
          type="search"
          className="cr-search-form__input form-control"
          placeholder="Search..."
        />
    </Form>);
};

export default SearchInput;