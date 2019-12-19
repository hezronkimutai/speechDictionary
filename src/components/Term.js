import React from "react";
import { connect } from "react-redux";

 const Term = ( props ) => {   
   return(
  <div className="pastTerm">
      {props.term.id}
  </div>
);
 };

export default connect(
  null,
)(Term);
