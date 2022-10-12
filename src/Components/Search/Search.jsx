import React, {useContext} from 'react';
import { useState } from 'react';

import {SearchContext} from "../../context/search-context";
import useDebounce from "../../hooks/useDebounce";

const Search = () => {
    const [search, setSearch] = useState('')
    const handleChange = (e) => {
        setSearch(e.target.value)
  };
  
  const value = useDebounce(search, 500);
  const searchContext = useContext(SearchContext);
     searchContext.searchHandler(value);

    return (
        <div>
            <form className="search_form" action="" >
                <input
                  type="text"
                  placeholder="Search Star Wars"
                  className="search_input"
                  onChange={handleChange}
                  value={search}
                />
                <button className="search_button">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
        </div>
    );
};

export default Search;