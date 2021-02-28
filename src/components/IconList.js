import linkedinOutlined from '@iconify-icons/ant-design/linkedin-outlined';
import linkedinFilled from '@iconify-icons/ant-design/linkedin-filled';

import githubFilled from '@iconify-icons/ant-design/github-filled';
import githubOutlined from '@iconify-icons/ant-design/github-outlined';

import mailOutlined from '@iconify-icons/ant-design/mail-outlined';
import mailTwotone from '@iconify-icons/ant-design/mail-twotone';

import fileTextOutlined from '@iconify-icons/ant-design/file-text-outlined';
import fileTextTwotone from '@iconify-icons/ant-design/file-text-twotone';

import folderOpenOutlined from '@iconify-icons/ant-design/folder-open-outlined';
import folderOpenTwotone from '@iconify-icons/ant-design/folder-open-twotone';

const IconList = [
	{
		name: 'LinkedIn',
		noHover: linkedinOutlined,
		withHover: linkedinFilled,
		color: '#2867B2',
		redirect: 'https://www.linkedin.com/in/kaylasward/',
	},
	{
		name: 'GitHub',
		noHover: githubOutlined,
		withHover: githubFilled,
		color: '#6cc644',
		redirect: 'https://github.com/kswardsf',
	},
	{
		name: 'Portfolio',
		noHover: folderOpenOutlined,
		withHover: folderOpenTwotone,
		color: 'grey',
		redirect: '/portfolio',
	},
	{
		name: 'Email',
		noHover: mailOutlined,
		withHover: mailTwotone,
		color: '#BB001B',
		redirect: 'mailto:swardkm@gmail.com',
	},

	{
		name: 'Resumé',
		noHover: fileTextOutlined,
		withHover: fileTextTwotone,
		color: 'black',
		redirect: '/kaylaswardresume.pdf#toolbar=0',
	},
];

export default IconList;
