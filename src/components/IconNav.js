import React from 'react';
import styled from 'styled-components';

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
				color={icon.color}
			/>
		);
	});

	return <IconContainer>{iconList}</IconContainer>;
};

const IconContainer = styled.div`
	text-align: center;
`;

export default IconNav;
