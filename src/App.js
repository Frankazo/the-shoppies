import React from 'react';
import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";

// components imports
import SearchBar from './components/searchBar/searchBar.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
      </header>
    </div>
  );
}

export default App;
