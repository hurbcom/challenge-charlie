import React , { useState, useEffect } from 'react';

import './Background.css'

export default function Background() {
	const [ background , setBackground ] = useState('https://www.bing.com//th?id=OHR.FinlandCamping_ROW3658677085_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp')
	const [ loading, setLoading] = useState(false);
	
	
	async function fetchUrl() {
		let headers = {
			'Access-Control-Allow-Origin':'*',
			'Content-Type': 'application/json',
			'mode':'cors'
		};
		const response = await fetch('http://localhost:3003/image', { heders: headers})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				return data.images[0].url
			})

		setBackground( 'https://www.bing.com/' + response);
		setLoading(false);
	}

	useEffect(() => {
		fetchUrl();
	}, []);

  return (
		<>
			{loading ? (
					"Loading..."
				) : (
					<div className="backgroundApp" 
						style={{ backgroundImage: `url(${background})` }} >		
					</div>
				)}
		</>
  );
}
