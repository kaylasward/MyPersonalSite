import React, { useState } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import {
	Card,
	CardHeader,
	CardContent,
	CardActions,
	Typography,
	Button,
	Chip,
	Grid,
} from '@material-ui/core';

import documents from '../data/portfoliodocsdata.js';
import Doc from '../components/Doc';

const Portfolio = () => {
	const { url } = useRouteMatch();
	const [currList, setCurrList] = useState(documents);

	return (
		<div>


			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
			>
				{currList.map((doc) => {
					const docDate =
						doc.date.getMonth().toString() +
						'-' +
						doc.date.getDate().toString() +
						'-' +
						doc.date.getFullYear().toString();

					const viewButton = (
						<Button size="small" color="primary">
							View
						</Button>
					);

					return (
						<Grid key={doc.id} item>
							<Card style={{ width: 300, margin: 20 }}>
								<CardHeader
									title={doc.name}
									subheader={docDate}
									style={{ paddingBottom: 0 }}
								/>
								<CardContent>
									<Typography variant="body2" component="p">
										{doc.desc}
									</Typography>
								</CardContent>
								{doc.techs.map((tech, index) => (
									<Chip
										key={index}
										label={tech}
										style={{ marginLeft: 10 }}
									/>
								))}
								<CardActions>
									{doc.type === 'PDF' ? (
										<Link
											to={`${url}/${doc.id}`}
											style={{ textDecoration: 'none' }}
										>
											{viewButton}
										</Link>
									) : (
										<a
											href={doc.url}
											style={{ textDecoration: 'none' }}
										>
											{viewButton}
										</a>
									)}
								</CardActions>
							</Card>
						</Grid>
					);
				})}
			</Grid>

			<Switch>
				<Route exact path={`/${url}/:docid`}>
					<Doc />
				</Route>
			</Switch>
		</div>
	);
};

export default Portfolio;
