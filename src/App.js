import bondPic from './IMG_1101.jpg';
import './App.css';
import React, { useState, useEffect, useSetInterval, useRef } from 'react';

// const useTypewriter = (message = []) => {
// 	const [txt, setTxt] = useState('');

// 	const intervalRef = useRef();

// 	useEffect(() => {
// 		let index = 0; // init the index

// 		clearInterval(intervalRef.current); // clear the interval if message changes

// 	//	if (!message.length) return; // do nothing if message is empty

// 		intervalRef.current = setInterval(() => {
// 			setTxt(message[index]);
// 			console.log(txt)

// 			index += 1;

// 		//	if (index === message.length) clearInterval(intervalRef.current); // clear interval when message ends
// 		}, 1000);

// 		return () => clearInterval(intervalRef.current); // clear interval if component is unmounted
// 	}, [message, intervalRef, setTxt]);

// 	return txt;
// };

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
	
	var index = 0;

	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				index = index + 1;
				console.log(index);
				setCurrHobby(hobbyArray[index]);
				if (index === hobbyArray.length) {
					setIsActive(false);
				}
			}, 1000);
		}
		return () => clearInterval(interval);
	}, index);

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
