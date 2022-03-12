export default function SolunarListing({ lat, lon, date, data }) {
	return (
		<div className="solunar-listing">
			<ul>
				<li><label htmlFor="date">Date:</label><span className="date">{date}</span></li>
				<li><label htmlFor="loc">Location:</label><span className="date">{lat},{lon}</span></li>
				<li><label htmlFor="stars">Prediction:</label><span className="stars">{data.dayRating}</span></li>
				<li><label>Best Times:</label>
					<ul>
						<li>{data.major1Start} - {data.major1Stop}</li>
						<li>{data.major2Start} - {data.major2Stop}</li>
					</ul>
				</li>
				<li><label>Good Times:</label>
					<ul>
						<li>{data.minor1Start} - {data.minor1Stop}</li>
						<li>{data.minor2Start} - {data.minor2Stop}</li>
					</ul>
				</li>
			</ul>
			<pre className="solunar-data">
			{
				JSON.stringify(data, null, 2)
			}
			</pre>
		</div>
	);
}
