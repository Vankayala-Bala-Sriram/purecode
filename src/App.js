import React, { useState } from 'react';
import './App.css';
import NavComponent from './components/Navbar';
import Main from "./components/MainComponent";
import OverviewComponent from "./components/OverviewComponent";
import SearchBar from './components/SearchBar';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const appClass = isDarkMode ? 'dark-mode' : 'light-mode';
  return (
    <div className="App">
      <NavComponent/>
      <SearchBar/>
      <div className={`App ${appClass}`}>
        <div className={`dark-mode-toggle ${appClass}`}>
          <label className="switch">
            <input type="checkbox" onChange={toggleDarkMode} checked={isDarkMode} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <Main/>
      <OverviewComponent/>
    </div>
  );
}

export default App;
