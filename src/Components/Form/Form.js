import React from "react";
import "./Form.css"

const Form = props => 

	<form className="search text-center">
		<div className="form-group">
			<div className="row">
				<label>Topic</label>
			</div>
			<div className="row">
				<input
				type="text"
				name="topic"
				value={props.q}
				onChange={props.handleInputChange}
				/>
			</div>
			<div className="row">
				<label>Start date</label>
			</div>
			<div className="row">
				<input
				type="text"
				name="start_date"
				value={props.start_date}
				onChange={props.handleInputChange}
				/>
			</div>
			<div className="row">
				<label>End date</label>
			</div>
			<div className="row">
				<input
				type="text"
				name="end_date"
				value={props.end_date}
				onChange={props.handleInputChange}
				/>
			</div>
		</div>
	</form>


export default Form;