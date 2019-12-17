import React from "react";
import { connect } from "react-redux";
import { addTerm } from "../redux/actions";
<<<<<<< HEAD
import axios from 'axios';
import {convert} from '../utils/textToSpeech'

 class SearchTerm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", termDetails:'',audio:'' };
  }

  updateInput = input => {
    this.setState({ input });
  };
handleGetMeaning=async(term)=>{
  const BASE_URL = "http://api.urbandictionary.com/v0/define?term="
const response = await axios.get(`${BASE_URL}${term}`)
this.setState({termDetails:response.data})
}
handleAddTerm = () => {
      this.handleGetMeaning(this.state.input);
      this.props.addTerm(this.state.termDetails);
      this.setState({ input: "" });
=======
import { addInput } from "../redux/actions";
import axios from "axios";

const SearchTerm = props => {
  const input = props.terms.input;
  const updateInput = input => {
>>>>>>> ch(refactor code)
    
    props.addInput(input);
  };
<<<<<<< HEAD
  render() {

    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="" onClick={this.handleAddTerm}>
          Add Term
        </button>
        {
          this.state.termDetails.list ? this.state.termDetails.list.map((i,index)=>{                        
            return (<div key={index}>
              {i.word}
              <div>::::::::</div>
              {i.definition}
              <button  onClick = {()=>convert(i.definition)}>play</button>
              </div>)
           } ): ''
        }
      </div>
    );
  }
}
=======
  const handleGetMeaning = async ( term) => {
    const BASE_URL = "http://api.urbandictionary.com/v0/define?term=";
    const response = await axios.get(`${BASE_URL}${term}`);
    props.addTerm(response.data);
  };
  const handleAddTerm = () => {
    handleGetMeaning(input);
  };
  return (
    <div>
      <input onChange={e => updateInput(e.target.value)} value={input} />
      <button className="" onClick={handleAddTerm}>
        Add Term
      </button>
    </div>
  );
};


const mapStateToProps = state => {

>>>>>>> ch(refactor code)

  return state;
};
export default connect( mapStateToProps,{ addTerm,addInput })(SearchTerm);
