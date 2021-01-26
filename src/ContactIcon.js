import React, { useState } from 'react';
import './App.css';

import { Icon } from '@iconify/react';

const ContactIcon = (props) => {
	const [iconHovered, setIconHovered] = useState(props.noHover);

	return (
		<a href={props.redirect} className="icons">
			<Icon
				onMouseEnter={() => setIconHovered(props.withHover)}
				onMouseLeave={() => setIconHovered(props.noHover)}
				icon={iconHovered}
			/>
		</a>
	);
};

export default ContactIcon;
