import React from 'react';
import styled from 'styled-components';

import '../App.css';
import bondPic from '../data/IMG_1101.jpg';
import HobbyWord from '../components/HobbyWord';
import IconNav from '../components/IconNav';

//import Footer from './Footer';

const HomeScreen = () => {
	return (
		<MainContainer>
			<MountainPicContainer>
				<img
					src={bondPic}
					className="mountain-pic"
					alt="Mount Bondcliff"
				/>
			</MountainPicContainer>
			<ContentContainer>
				<h2>Hello! My name is Kayla Sward and I am a</h2>
				<HobbyWord />
			</ContentContainer>

			<ContentContainer>
				<IconNav />
			</ContentContainer>

			{/* <Footer /> */}
		</MainContainer>
	);
};

const MainContainer = styled.div``;

const MountainPicContainer = styled.div`
	width: 100%;
	height: 250px;
	object-fit: cover;
`;

const ContentContainer = styled.div`
	font-family: 'Dosis';
	text-align: center;
	padding: 40px;
`;

export default HomeScreen;
