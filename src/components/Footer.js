import React from 'react';

import './App.css';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div className="footer">
			Made by Me with React
			<br />
			{year}
		</div>
	);
};

export default Footer;
