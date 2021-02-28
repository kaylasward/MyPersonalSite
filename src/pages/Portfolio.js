import React, { useState } from 'react';
import { Select, FormControl, InputLabel, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import documents from '../data/portfoliodocsdata.js';
import PortfolioGrid from '../components/PortfolioGrid';

const leastRecentList = [...documents].sort((a, b) => {
	return a.date - b.date;
});

const mostRecentList = [...leastRecentList].reverse();

const nameList = [...documents].sort((a, b) => {
	return a.name.localeCompare(b.name);
});

const defaultList = mostRecentList;

const possibleFilters = () => {
	let arr = [];

	documents.forEach((doc) => {
		doc.techs.forEach((tech) => {
			if (!arr.includes(tech)) {
				arr.push(tech);
			}
		});
	});

	arr.sort();
	return arr;
};

const Portfolio = () => {
	let history = useHistory();
	const [currList, setCurrList] = useState(mostRecentList);

	const handleSortButton = (e) => {
		switch (e.target.value) {
			case 'name':
				setCurrList(nameList);
				break;
			case 'dateAsc':
				setCurrList(leastRecentList);
				break;
			case 'dateDesc':
				setCurrList(mostRecentList);
				break;
			default:
				setCurrList(defaultList);
				break;
		}
	};

	//const handleFilterButton = (e) => {};

	return (
		<div>
			<Container>
				{/* <BackButtonContainer>
					<Button onClick={() => history.goBack()}>Back</Button>
				</BackButtonContainer> */}
				<FormControl style={{ minWidth: 120 }}>
					<InputLabel shrink id="sortby-label">
						Sort by
					</InputLabel>
					<Select
						native
						labelId="sortby-label"
						onChange={handleSortButton}
					>
						<option value="none"></option>
						<option value="name">Name</option>
						<option value="dateAsc">Date Ascending</option>
						<option value="dateDesc">Date Descending</option>
					</Select>
				</FormControl>
			</Container>
			{/* <FormControl style={{ minWidth: 120 }}>
				<InputLabel shrink>Filter by</InputLabel>
				<Select multiple native onChange={handleFilterButton}>
					{possibleFilters().map((tech) => (
						<option value={tech}>{tech}</option>
					))}
				</Select>
			</FormControl> */}
			<PortfolioGrid list={currList} />
		</div>
	);
};

const Container = styled.div`
	text-align: center;
	margin-top: 10px;
`;

const BackButtonContainer = styled.div`
	text-align: left;
`;

export default Portfolio;
