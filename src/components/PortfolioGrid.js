import React from 'react';
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

const PortfolioGrid = (props) => {
	return (
		<div>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
			>
				{props.list.map((doc) => {
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
							<Card style={{ width: 300, margin: 10 }}>
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
									<a
										href={doc.url}
										style={{ textDecoration: 'none' }}
									>
										{viewButton}
									</a>
								</CardActions>
							</Card>
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
};

export default PortfolioGrid;
