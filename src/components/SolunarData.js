import {
	useEffect,
	useState,
} from 'react';

import SolunarListing from './SolunarListing';

export default function SolunarData( { lat, lon, date, utcOffset } ) {
	const [data, setData] = useState([]);

	useEffect(() => {
	  async function fetchData() {
		const result = await fetch(`https://api.solunar.org/solunar/${lat},${lon},${date},${utcOffset}`);
		const data = await result.json();
		setData(data);
	  }

	  fetchData();
	}, [lat, lon, date, utcOffset]);

	return (
		<SolunarListing
			lat={lat}
			lon={lon}
			date={date}
			data={data}
		/>
	);
  }
