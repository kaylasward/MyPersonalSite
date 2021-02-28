const files = [
	{
		name: 'Razer Widow Quick Guide',
		date: new Date(2020, 5, 12),
		url: '/portfoliodocs/RazerKeyboardGuide.pdf',
		desc:
			'Quick guide written for a Northeastern class for the Razer Widow keyboard.',
		techs: ['Oxygen'],
		cat: 'Writing',
		type: 'PDF'
	},
	{
		name: 'Pencil2D WhitePaper',
		date: new Date(2021, 2, 26),
		url: '/portfoliodocs/Pencil2DWhitepaper.pdf',
		desc:
			'Whitepaper written for a Northeastern class outlining the features of Pencil2D.',
		techs: ['Microsoft Word'],
		cat: 'Writing',
		type: 'PDF'
	},
	{
		name: 'Backpacking Basics',
		date: new Date(2020, 6, 26),
		url: '/portfoliodocs/BackpackingBasics.pdf',
		desc:
			"Guide written for a Northeastern class on how to backpack in NH's White Mountain.",
		techs: ['Oxygen'],
		cat: 'Writing',
		type: 'PDF'
	},
	{
		name: 'Create a Word-Changing React Component',
		date: new Date(2021, 2, 9),
		url: 'https://swardkm.medium.com/react-word-changing-component-c8f29827e8bb',
		desc:
			"Article on how to create a component that changes words in React.",
		techs: ['Medium', 'React.js'],
		cat: 'Writing',
		type: 'WEB'
	},
];

files.forEach((file, index) => {
	file.id = index;
});

export default files;
