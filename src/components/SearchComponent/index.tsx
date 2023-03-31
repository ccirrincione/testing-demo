import React, {useState} from "react";

interface SearchComponentProps {
  searchTitle: string;
  onSearch: (searchValue: string) => void;
}

export const SearchComponent = ({ searchTitle, onSearch }: SearchComponentProps) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div style={{
      backgroundColor: "lightgrey",
      padding: "8px",
      borderRadius: "8px",
    }}>
      <h4
        data-testid="search-component-header"
      >
        {searchTitle}
      </h4>
      <div style={{
        display: "flex",
      }}>
        <input
          style={{
            width: "100%",
            marginRight: "4px",
          }}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          data-testid="child-component-header"
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              onSearch(inputValue);
            }
          }}
        />
        <button onClick={() => onSearch(inputValue)}>Search</button>
      </div>
    </div>
  );
}