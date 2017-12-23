import React from "react";
import Jumbotron from "../Components/Jumbotron";
import Navbar from "../Components/Navbar";
import Form from "../Components/Form";
import SearchButton from "../Components/SearchButton";	
import nytAPI from "../routes/api/nytAPI.js";
import Results from "../Components/Results";

var pageStyle = {
	padding: 40
}

class Search extends React.Component {

state = {
	topic: "",
	start_date:"",
	end_date: "",
	results: []
}

handleInputChange = event => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({
			[name]: value
		});
	};

componentDidMount() {
	this.searchNYT("dogs", "1991", "2017");
}

handleFormSubmit = event => {
    event.preventDefault();
 	this.searchNYT(this.state.topic)
  };

 searchNYT = query => {
 	this.setState({results: this.state.results})

 	nytAPI.search(query)
 	}


	render() {
		return(
		<div className="SearchPage" style={pageStyle}>
			<Navbar />
			<Jumbotron>
				<h1>Find An Article</h1>
			</Jumbotron>
			<Form 
			topic={this.state.topic}
			end_date={this.state.end_date}
			start_date={this.state.start_date}
          	handleInputChange={this.handleInputChange}
			/>
			<SearchButton 
			onClick={this.handleFormSubmit}>
				<span>Search!</span>
			</SearchButton>
        <Results results={this.state.results} />
		</div>
		);
	}
}

export default Search;
