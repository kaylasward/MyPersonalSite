import React, { useState, useEffect, useRef } from 'react';
import hobbyArray from './HobbyList';

const HobbyWord = () => {
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
	});

	return <h1>{currHobby}</h1>;
};

export default HobbyWord;
