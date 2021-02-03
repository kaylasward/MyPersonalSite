import React, { useState, useEffect, useRef } from 'react';
import { Animated } from 'react-animated-css';
import ReactCSSTransitionGroup from 'react-transition-group';
import { AnimateOnChange } from 'react-animation';

import { hobbyArray, randomHexColors } from './HobbyList';

const HobbyWord = () => {
	const [currHobby, setCurrHobby] = useState(hobbyArray[0]);
	const [currColor, setCurrColor] = useState(
		randomHexColors[Math.floor(Math.random() * randomHexColors.length)]
	);
	const [isActive, setIsActive] = useState(true);

	const index = useRef(0);

	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				index.current++;
				setCurrHobby(hobbyArray[index.current]);
				var randNum = Math.floor(
					Math.random() * randomHexColors.length
				);
				setCurrColor(randomHexColors[randNum]);
				if (index.current === hobbyArray.length - 1) {
					setCurrColor('#1798c1');
					setIsActive(false);
				}
			}, 1000);
		}
		return () => clearInterval(interval);
	});

	return (
		<div>
			<AnimateOnChange>
				<h1 style={{ color: currColor }}>{currHobby}</h1>
			</AnimateOnChange>
		</div>
	);
};

export default HobbyWord;
