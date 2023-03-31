import React from "react";
import {SearchResult} from "../../models/searchResult";

interface SearchResultComponentProps {
  searchResults: SearchResult[];
}

export const SearchResultComponent = ({ searchResults }: SearchResultComponentProps) => {
  return (
    <div
      style={{
        padding: "24px 0px",
      }}
    >
      {
        searchResults.map((sr) => (
          <div
            key={sr.id}
            style={{
              border: "1px solid lightgrey",
              borderRadius: "8px",
              marginBottom: "8px",
              padding: "8px",
            }}
          >
            <p>{sr.text}</p>
          </div>
        ))
      }
    </div>
  );
}