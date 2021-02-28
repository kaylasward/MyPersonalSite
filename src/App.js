import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomeScreen from './pages/HomeScreen';
import LoadingScreen from './pages/LoadingScreen';
import Portfolio from './pages/Portfolio';
import Doc from './components/Doc';
//import Footer from './Footer';

const App = () => {
	const [isLoading, setLoading] = useState(true);
	//	const pages = [<HomeScreen />, <LoadingScreen />];

	useEffect(() => {
		setTimeout(() => setLoading(false), 4000);
	}, []);

	//return <>{isLoading === false ? <HomeScreen /> : <LoadingScreen />}</>;
	return (
		<div>
			<Switch>
				<Route exact path="/portfolio/:id">
					<Doc />
				</Route>
				<Route path="/portfolio">
					<Portfolio />
				</Route>
				<Route exact path="/">
					<HomeScreen />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
