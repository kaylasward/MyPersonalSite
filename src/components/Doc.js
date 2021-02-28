import React from 'react';
import { useParams } from 'react-router-dom';
import documents from '../data/portfoliodocsdata.js';

const Doc = () => {
	const { id } = useParams();

	const doc = documents.find((p) => p.id === Number(id));

	return (
		<div>
			{doc.type === 'PDF' ? (
				<embed
					src={doc.url + '#toolbar=0'}
					type="application/pdf"
					width="100%"
					height="1200vw"
				/>
			) : (
				'MISSING'
			)}
		</div>
	);
};

export default Doc;
