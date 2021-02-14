import React, { useState, useEffect } from 'react';

import './App.css';
import HomeScreen from './HomeScreen';
import LoadingScreen from './LoadingScreen';
//import Footer from './Footer';

const App = () => {
	const [isLoading, setLoading] = useState(true);
	//	const pages = [<HomeScreen />, <LoadingScreen />];

	useEffect(() => {
		setTimeout(() => setLoading(false), 4000);
	}, []);

	return <>{isLoading === false ? <HomeScreen /> : <LoadingScreen />}</>;
};

export default App;
