import React from "react"
import "./SearchButton.css";

export const SearchButton = props =>
<div className="container">
	<div className="row">
		<div className="col-md-12 text-center">
			<button {...props} className="btn btn-primary btn-lg text-center logo">
				{props.children}
			</button>
		</div>
	</div>
</div>


export default SearchButton;