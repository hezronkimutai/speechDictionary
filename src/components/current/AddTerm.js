import React, {  useEffect } from 'react';
import { connect } from "react-redux";
import { addTerm,addInput } from "../../redux/actions";
import axios from "axios";

const SearchTerm = props => {
  const updateInput = input => {    
    props.addInput(input);
  };
  
  const handleGetMeaning = async ( term) => {
    const options = {
      "headers": {
        "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
        "x-rapidapi-key": "b97efcac5emshc17a3a4fdf8e160p1835c6jsn9557deebb035"
      }
    }
    const BASE_URL = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=";
    const response = await axios.get(`${BASE_URL}${term}`,options);
    props.addTerm(response.data);
  };
  useEffect(() => {    
    handleGetMeaning(props.terms.input);
  },[]);
  const handleAddTerm = (e) => {
    handleGetMeaning(props.terms.input);
    e.preventDefault();
    props.addInput('');
  };
  
  return (
    <div className="searchField">
      <form className="searchFieldForm" onSubmit={handleAddTerm}>
      <input placeholder="Find meaning" onChange={e => updateInput(e.target.value)} value={props.terms.input} />
      </form>
    </div>
  );
};


const mapStateToProps = state => {
  return state;
};
export default connect( mapStateToProps,{ addTerm,addInput })(SearchTerm);