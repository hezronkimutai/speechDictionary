import React from "react";
import { connect } from "react-redux";
import { addTerm } from "../redux/actions";
import axios from 'axios';

 class SearchTerm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", termDetails:'' };
  }

  updateInput = input => {
    this.setState({ input });
  };
handleGetMeaning=(term)=>{
axios.get(`http://api.urbandictionary.com/v0/define?term=${term}`)
.then(response => {
  console.log('<<<<<<<>>>>>>',response);
  
  this.setState({termDetails:response.data})
})
.catch(err => {
	console.log(err);
});
}
handleAddTerm = () => {
      this.handleGetMeaning(this.state.input);
      this.props.addTerm(this.state.termDetails);
      this.setState({ input: "" });
    
  };

  render() {
    console.log('=====>>>>>>>',this.state.termDetails);

    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTerm}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTerm }
)(SearchTerm);
