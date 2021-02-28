import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import HomeScreen from './pages/HomeScreen';
import LoadingScreen from './pages/LoadingScreen';
import Portfolio from './pages/Portfolio';
//import Footer from './Footer';

const App = () => {
	const [isLoading, setLoading] = useState(true);
	//	const pages = [<HomeScreen />, <LoadingScreen />];

	useEffect(() => {
		setTimeout(() => setLoading(false), 4000);
	}, []);

	//return <>{isLoading === false ? <HomeScreen /> : <LoadingScreen />}</>;
	return (
		<Container>
			<Switch>
				<Route path="/portfolio">
					<Portfolio />
				</Route>
				<Route exact path="/">
					<HomeScreen />
				</Route>
			</Switch>
		</Container>
	);
};

const Container = styled.div`
	background-color: #e0e0e0;
	margin: 0;
	height: 100vh;
`;

export default App;
