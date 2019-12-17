import React from "react";
import { connect } from "react-redux";
import textToSpeech from "../../utils/textToSpeech";
const TermDetails = props => {
  let time = new Date(props.term.written_on);
  time = String(time).slice(0, 15);
  let definitions = props.term.definition.split(/(\d+)/);
  let examples = props.term.example.split(/(\d+)/);
  definitions = definitions.map(item => {
    return /(\d+)/.test(item) ? "" : item;
  });
  examples = examples.map(item => {
    return /(\d+)/.test(item) ? "" : item;
  });
  return (
    <div className="oneTerm">
      <div className="termHeader">
        <div className="word">
          <h2>{props.term.word}</h2>
        </div>
        <div className="date">{time}</div>
      </div>
      <div className="definitions">
        <div className="definitionHeader">
          <div>
            <h3>Definitions</h3>
          </div>
          <div>
            <button onClick={() => textToSpeech(props.term.definition)}>
            <img src="https://res.cloudinary.com/hezzie/image/upload/v1576831103/vnTNYyL-speaker-vector_yhk9os.svg" />
            </button>
          </div>
        </div>
        {definitions.map((item, index) => (
          <div key={index} className="definition">
            {item}
          </div>
        ))}
      </div>
      <div className="examples">
        <div className="definitionHeader">
          <div>
            <h3>Examples</h3>
          </div>
          <div>
            <button onClick={() => textToSpeech(props.term.example)}>
              <img src="https://res.cloudinary.com/hezzie/image/upload/v1576831103/vnTNYyL-speaker-vector_yhk9os.svg" />
            </button>
          </div>
        </div>

        {examples.map((item, index) => (
          <div key={index} className="example">
            {item}
          </div>
        ))}
      </div>
      <div className="permalink">
        <a href={props.term.permalink}>permalink</a>
      </div>
      <div className="thumbs">
        <div className="thumbsUp">
          <img src="https://res.cloudinary.com/hezzie/image/upload/v1576788639/thumbs-up-svgrepo-com_llczph.svg" />
          {props.term.thumbs_up}
        </div>
        <div className="thumbsDown">
          <img src="https://res.cloudinary.com/hezzie/image/upload/v1576788639/thumb-down-svgrepo-com_baleir.svg" />
          {props.term.thumbs_down}
        </div>
      </div>
    </div>
  );
};

export default connect(null)(TermDetails);
