import React, {useState} from "react";
import PropTypes from 'prop-types'

export const SearchContext = React.createContext({
    query:'',
    searchHandler:() => {},
    resetSearch:() => {}
});

const SearchContextProvider = (props) => {
    const [query, setQuery] = useState("");

    const searchHandler = (query) => {
        setQuery(query);
    };
    const resetSearch = () => {
        setQuery('')
    }

    return (
      <SearchContext.Provider
        value={{
          query: query,
          searchHandler: searchHandler,
          resetSearch: resetSearch,
        }}
      >
        {props.children}
      </SearchContext.Provider>
    )
};
SearchContextProvider.propTypes = {
        children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default SearchContextProvider;