import React, { useState } from 'react';
import '../styles/SearchBar.css';

function SearchBar() {
    const [search, setSearch] = useState('');
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;
