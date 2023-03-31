import React, {useState} from "react";
import {getSearchResults} from "../../clients/searchClient";
import {SearchResult} from "../../models/searchResult";
import {SearchComponent} from "../SearchComponent";
import {SearchResultComponent} from "../SearchResultComponent";

export const SearchContainer = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  return (
    <div>
      <h1 data-testid="search-container-header">Search Container</h1>
      <SearchComponent
        searchTitle={"Search Component"}
        onSearch={(searchValue) => setSearchResults(getSearchResults(searchValue))}
      />
      <SearchResultComponent searchResults={searchResults}/>
    </div>
  );
}