import React from "react";
import { connect } from "react-redux";
 const Term = ({ term }) => (
  <div className="pastTerm">
      {term}
  </div>
);

export default connect(
  null,
)(Term);
