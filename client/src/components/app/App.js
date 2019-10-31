// Module Imports
import React from 'react';

// Component Imports
import Search from '../search';

// scss
import '../../assets/stylesheets/index.scss';

function App() {
	return (
		<div className="App grid-container">
			<header className="app-header">
				<h1 className="app-title">
					Pins
				</h1>
				<h3 className="app-subtitle">
					&lt; Some Catchy Title &gt;
				</h3>
			</header>
			{/* Search Function and filtering */}
			<Search />
		</div>
	);
}

export default App;
