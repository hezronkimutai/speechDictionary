import React from "react";
import { connect } from "react-redux";
import {addCurrentId } from "../../redux/actions";


 const Term = ( props ) => {  
  const handleAddCurrentId = (currentId) => {
    props.addCurrentId(currentId);
  };
  
   return(
  <div className="historyLinkItem">
          <button className="" onClick={()=>handleAddCurrentId(props.term.id)}>{props.term.id}{props.term.content.list[0].definition}</button>...

  </div>
);
 };

export default connect(
 null, { addCurrentId }
)(Term);
