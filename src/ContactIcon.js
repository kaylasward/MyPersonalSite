import React, { useState } from 'react';
import './App.css';

import { Icon } from '@iconify/react';

const ContactIcon = (props) => {
	const [iconHovered, setIconHovered] = useState({
		icon: props.noHover,
		color: "black",
	});

	return (
		<a href={props.redirect} className="icons">
			<Icon
				onMouseEnter={() => {
					setIconHovered({
						icon: props.withHover,
						color: props.color,
					});
				}}
				onMouseLeave={() =>
					setIconHovered({
						icon: props.noHover,
						color: 'black',
					})
				}
				icon={iconHovered.icon}
				style={{ color: iconHovered.color }}
			/>
		</a>
	);
};

export default ContactIcon;
