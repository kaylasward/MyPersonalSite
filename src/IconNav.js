import './App.css';
import React from 'react';

import ContactIcon from './ContactIcon';

import linkedinOutlined from '@iconify-icons/ant-design/linkedin-outlined';
import linkedinFilled from '@iconify-icons/ant-design/linkedin-filled';

import mailOutlined from '@iconify-icons/ant-design/mail-outlined';
import mailTwotone from '@iconify-icons/ant-design/mail-twotone';

import fileTextOutlined from '@iconify-icons/ant-design/file-text-outlined';
import fileTextTwotone from '@iconify-icons/ant-design/file-text-twotone';

const IconNav = () => {
	return (
		<div className="icon-container">
			<ContactIcon
				noHover={linkedinOutlined}
                withHover={linkedinFilled}
                redirect="https://www.linkedin.com/in/kaylasward/"
			/>
			<ContactIcon noHover={mailOutlined} withHover={mailTwotone} />
			<ContactIcon
				noHover={fileTextOutlined}
				withHover={fileTextTwotone}
			/>
		</div>
	);
};

export default IconNav;
