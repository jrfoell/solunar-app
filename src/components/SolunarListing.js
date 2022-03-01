export default function SolunarListing({ data }) {
	return (
		<pre className="solunar-data">
			{
				JSON.stringify(data)
			}
		</pre>
	);
}
