import React from 'react';

import './App.css';
import bondPic from './IMG_1101.jpg';
import HobbyWord from './HobbyWord';
import IconNav from './IconNav';
//import Footer from './Footer';

const App = () => {
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

				{/* <Footer /> */}
			</div>
		</div>
	);
};

export default App;