import React from "react";
import { connect } from "react-redux";
import Axios from "axios";


 const Term = ({ term }) => (
  <div className="pastTerm">
      {term}
  </div>
);

export default connect(
  null,
)(Term);
