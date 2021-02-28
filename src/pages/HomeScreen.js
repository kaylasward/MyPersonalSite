import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import bondPic from '../data/IMG_1101.jpg';
import HobbyWord from '../components/HobbyWord';
import IconNav from '../components/IconNav';

//import Footer from './Footer';

const HomeScreen = () => {
	return (
		<div className="body">
			<div className="main-container">
				<div className=".mountain-pic">
					<img
						src={bondPic}
						className="mountain-pic"
						alt="Mount Bondcliff"
					/>
				</div>
				<div className="content-container">
					<h2>Hello! My name is Kayla Sward and I am a</h2>
					<HobbyWord />
				</div>
				<div className="content-container">
					<IconNav />
				</div>

				<Link to="/portfolio">portfolio</Link>

				{/* <Footer /> */}
			</div>
		</div>
	);
};

export default HomeScreen;
