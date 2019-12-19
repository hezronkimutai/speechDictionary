import React from "react";
import { connect } from "react-redux";
import textToSpeech from '../utils/textToSpeech'
 const TermDetails = ( props ) => {
   return(
  <div className="pastTerm">
      {props.term.definition}
      <button  onClick = {()=>textToSpeech(props.term.definition)}>play</button>
  </div>
);
 };

export default connect(
  null,
)(TermDetails);
