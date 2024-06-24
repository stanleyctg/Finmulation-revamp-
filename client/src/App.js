// frontend/src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchStock from './Components/SearchStock.js';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <SearchStock />
            </header>
        </div>
    );
}

export default App;
