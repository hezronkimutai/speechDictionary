import React from "react";
import { connect } from "react-redux";
import { addTerm,addInput } from "../redux/actions";
import axios from "axios";

const SearchTerm = props => {
  const input = props.terms.input;
  const updateInput = input => {
    props.addInput(input);
  };
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
  return state;
};
export default connect( mapStateToProps,{ addTerm,addInput })(SearchTerm);