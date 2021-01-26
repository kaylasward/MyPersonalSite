import bondPic from './IMG_1101.jpg';
import './App.css';
import React from 'react';

import HobbyWord from './HobbyWord'

const App = () => {
	return (
		<div>
			<div className=".mountain-pic">
				<img
					src={bondPic}
					className="mountain-pic"
					alt="Mount Bondcliff"
				/>
			</div>
			<div className="content-container">
				<h1>Hello! My name is Kayla and I am a</h1>
				<HobbyWord />
			</div>
		</div>
	);
};

export default App;
