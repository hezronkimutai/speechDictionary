import React from "react";
import textToSpeech from '../utils/textToSpeech'


  const TermInfo = (props)=>{

    return (
      <div>
        {
          props.terms.list ? props.terms.list.map((i,index)=>{                        
            return (<div key={index}>
              {i.word}
              <div>::::::::</div>
              {i.definition}
              <button  onClick = {()=>textToSpeech(i.definition)}>play</button>
              </div>)
           } ): ''
        }
      </div>
    );
  }

export default TermInfo;
