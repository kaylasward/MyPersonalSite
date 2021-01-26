import bondPic from './IMG_1101.jpg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';

const App = () => {
	const hobbyArray = [
		'Hiker',
		'Home Cook',
		'Rock Climber',
		'Yogi',
		'Movie Buff',
		'Senior Software Engineer at Salesforce',
	];

	const [currHobby, setCurrHobby] = useState(hobbyArray[0]);
	const [isActive, setIsActive] = useState(true);

	const index = useRef(0);

	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				index.current++;
				setCurrHobby(hobbyArray[index.current]);
				if (index.current === hobbyArray.length - 1) {
					setIsActive(false);
				}
			}, 1000);
		}
		return () => clearInterval(interval);
	}, [hobbyArray, isActive]);

	return (
		<div>
			<div class=".mountain-pic">
				<img
					src={bondPic}
					className="mountain-pic"
					alt="Mount Bondcliff"
				/>
			</div>
			<div class="content-container">
				<h1>Hello! My name is Kayla and I am a</h1>
				<h1>{currHobby}</h1>
			</div>
		</div>
	);
};

export default App;
