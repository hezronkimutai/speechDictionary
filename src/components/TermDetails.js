import React from "react";
import { connect } from "react-redux";
import textToSpeech from "../utils/textToSpeech";
const TermDetails = props => {
  let  definitions = props.term.definition.split(/(\d+)/);
  console.log('definitions before',definitions);

  definitions=  definitions.map((item=>{
       return  /(\d+)/.test(item)? '':item
      }))
      console.log('definitions after',definitions);
      
  return (
    <div className="pastTerm">
      <div>{props.term.word}</div>
      <div>{
      
      definitions.map(item => <div>{item}</div>)}</div>
      <div>{props.term.example.split(/(\d+)/).map(item => <div>{item}</div>)}</div>
      <div>
        <a href={props.term.permalink}>ati</a>
      </div>
      <div>
        <div>{props.term.written_on}</div>
        <div>
          <div>{props.term.thumbs_up}</div>
          <div>{props.term.thumbs_down}</div>
        </div>
      </div>

      <button onClick={() => textToSpeech(props.term.definition)}>play</button>
    </div>
  );
};

export default connect(null)(TermDetails);
