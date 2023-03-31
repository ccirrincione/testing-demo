import React from 'react';
import {SearchContainer} from "./components/SearchContainer";
import './App.css';

function App() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      padding: "24px"
    }}>
      <div style={{
        width: "1024px"
      }}>
        <SearchContainer/>
      </div>
    </div>
  );
}

export default App;
