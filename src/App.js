import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Transition } from 'react-spring/renderprops';

import './App.css';
import HomeScreen from './HomeScreen';
import LoadingScreen from './LoadingScreen';
//import Footer from './Footer';

const App = () => {
	const [isLoading, setLoading] = useState(true);
	//	const pages = [<HomeScreen />, <LoadingScreen />];

	useEffect(() => {
		setTimeout(() => setLoading(false), 2500);
	}, []);

	return <>{isLoading === false ? <HomeScreen /> : <LoadingScreen />}</>;
};

export default App;
