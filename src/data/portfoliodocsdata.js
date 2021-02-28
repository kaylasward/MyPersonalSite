const files = [
	{
		name: 'Razer Widow Quick Guide',
		date: new Date(2020, 5, 12),
		url: '/portfolio/RazerKeyboardGuide.pdf#toolbar=0',
		desc:
			'Quick guide written for a Northeastern class for the Razer Widow keyboard.',
		techs: ['Oxygen'],
		cat: 'Writing',
	},
	{
		name: 'Pencil2D WhitePaper',
		date: new Date(2021, 2, 26),
		url: '/portfolio/Pencil2DWhitepaper.pdf#toolbar=0',
		desc:
			'Whitepaper written for a Northeastern class outlining the features of Pencil2D.',
		techs: ['Microsoft Word'],
		cat: 'Writing',
	},
	{
		name: 'Pencil2D Quick Reference Guide',
		date: new Date(2021, 2, 26),
		url: '/portfolio/Pencil2DQRG.pdf#toolbar=0',
		desc:
			'Quick Reference Guide written for a Northeastern class outlining the features of Pencil2D.',
		techs: ['Microsoft Word'],
		cat: 'Writing',
	},
	{
		name: 'Backpacking Basics',
		date: new Date(2020, 6, 26),
		url: '/portfolio/BackpackingBasics.pdf#toolbar=0',
		desc:
			"Guide written for a Northeastern class on how to backpack in NH's White Mountain.",
		techs: ['Oxygen'],
		cat: 'Writing',
	},
	{
		name: 'Create a Word-Changing React Component',
		date: new Date(2021, 2, 9),
		url: 'https://swardkm.medium.com/react-word-changing-component-c8f29827e8bb',
		desc:
			"Article on how to create a component that changes words in React.",
		techs: ['Medium', 'React.js'],
		cat: 'Writing',
	},
	{
		name: 'Personal Website',
		date: new Date(2021, 1, 10),
		url: 'https://github.com/kaylasward/MyPersonalSite',
		desc:
			"Source code for this site.",
		techs: ['React.js'],
		cat: 'Coding',
	},
	{
		name: 'Gantt Project Guide',
		date: new Date(2020, 12, 11),
		url: '/portfolio/GanttProjectGuide.pdf#toolbar=0',
		desc:
			"Guide written for a Northeastern class on how to use the software Gantt Project.",
		techs: ['Microsoft Word'],
		cat: 'Writing',
	},
];

files.forEach((file, index) => {
	file.id = index;
});

export default files;
