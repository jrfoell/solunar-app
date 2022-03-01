import {
	useEffect,
	useState,
} from 'react';

import SolunarListing from './SolunarListing';

export default function SolunarData() {
	const [data, setData] = useState([]);

	useEffect(() => {
	  async function fetchData() {
		const result = await fetch('https://api.solunar.org/solunar/42.66,-84.07,20180207,-4');
		const data = await result.json();
		setData(data);
	  }

	  fetchData();
	}, []);

	return (
	  <>
		<h2>Response</h2>
		<SolunarListing
		  data={data}
		/>
	  </>
	);
  }
