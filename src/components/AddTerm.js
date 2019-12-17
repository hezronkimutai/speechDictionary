import React from "react";
import { connect } from "react-redux";
import { addTerm } from "../redux/actions";
import axios from 'axios';

 class SearchTerm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", termDetails:'',audio:'' };
  }

  updateInput = input => {
    this.setState({ input });
  };
  convert = ()=>{ 
     var audioCtx = new AudioContext();
    var  source = audioCtx.createBufferSource();
     fetch("https://voicerss-text-to-speech.p.rapidapi.com/?r=0&c=mp3&f=8khz_8bit_mono&src=Hello%252C%20world!&hl=en-us&key=a8512ad7a466442a91e327d383337413 ",
      {
       method: "GET",
     headers: {
         ["x-rapidapi-host"]: "voicerss-text-to-speech.p.rapidapi.com",
         ["x-rapidapi-key"]: "b97efcac5emshc17a3a4fdf8e160p1835c6jsn9557deebb035"
       }
     })
     .then(response=>{
       const reader =response.body.getReader()
     return new ReadableStream({
       start(controller) {
         return pump();
         function pump() {
           return reader.read().then(({ done, value }) => {
             if (done) {
                 controller.close();
                 return;
             }
             controller.enqueue(value);
             return pump();
           });
         }
       }  
     })
   })
   .then(stream => new Response(stream))
   .then(response => {
     console.log('[[[[]]]]',response);
     
     return response.arrayBuffer()
   })
   .then(function(buffer) {
     audioCtx.decodeAudioData(buffer, function(decodedData) {
       source.buffer = decodedData;
       console.log('hrr',source);
       
       source.connect(audioCtx.destination);
     });
   })
   .catch(err => console.error(err))
    
     source.start(0);
    // e.target.setAttribute('disabled', 'disabled');
  } 
handleGetMeaning=(term)=>{

axios.get(`http://api.urbandictionary.com/v0/define?term=${term}`)
.then(response => {
 //'' console.log('<<<<<<<>>>>>>',response);
  
  this.setState({termDetails:response.data})
})
.catch(err => {
	console.log(err);
});
}
 atou(str) {
  return decodeURIComponent(escape(window.atob(str)));
}
handleAddTerm = () => {
  this.convert();
      this.handleGetMeaning(this.state.input);
      this.props.addTerm(this.state.termDetails);
      this.setState({ input: "" });
    
  };
  render() {
  const  c =this.state.audio
  

    console.log('=====>>>>>>>',c);

    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTerm}>
          Add Todo
        </button>
        <button onClick = {this.convert}>play</button>
    {/* <audio controls><source src={c.blob}/></audio> */}
      </div>
    );
  }
}

export default connect(
  null,
  { addTerm }
)(SearchTerm);
