import React from "react";
import "./Results.css"

const Results = props =>
	<ul className="list-group">
		{props.results.map(results =>
			<li className="list-group-item" key={props.id}>
				<img className="img-responsive" alt="news_img" src={props.images.original.url} />
			</li>
			)}
	</ul>;

export default Results;