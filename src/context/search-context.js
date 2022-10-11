import React, {useState} from "react";


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
            value={{ query: query, searchHandler: searchHandler }}
        >
            {props.children}
        </SearchContext.Provider>
    );
};

export default SearchContextProvider;