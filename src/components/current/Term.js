import React from "react";
import { connect } from "react-redux";
import {addCurrentId } from "../../redux/actions";


 const Term = ( props ) => {  
  const handleAddCurrentId = (currentId) => {
    props.addCurrentId(currentId);
  };
   return(
  <div className="StoredTermId">
          <button className="" onClick={()=>handleAddCurrentId(props.term.id)}>{props.term.id}</button>

  </div>
);
 };

export default connect(
 null, { addCurrentId }
)(Term);
