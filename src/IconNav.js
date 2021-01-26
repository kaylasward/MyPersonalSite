import './App.css';
import React from 'react';

import ContactIcon from './ContactIcon';
import IconList from './IconList';

const IconNav = () => {
	const iconList = IconList.map((icon) => {
		return (
			<ContactIcon
				key={icon.name}
				alt={icon.name}
				noHover={icon.noHover}
				withHover={icon.withHover}
				redirect={icon.redirect}
			/>
		);
	});

	return (
		<div className="icon-container">
			{iconList}
		</div>
	);
};

export default IconNav;
