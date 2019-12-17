import React from "react";
import { connect } from "react-redux";
import AllTimeTerm from "./AllTimeTerm";
import { getStore } from "../../redux/selectors";
import {NavLink } from "react-router-dom";

const AllTimeTermsHistory = terms => {
  const allTerms = terms.terms;
  return (
    <div className="allTimeTermsHistory">
      {allTerms && allTerms.length
        ? allTerms.map((term, index) => {
            return <NavLink key={index} exact activeClassName="active" className="link" to="/"><AllTimeTerm  term={term} /></NavLink>;
          })
        : ""}
    </div>
  );
};

const mapStateToProps = state => {
  const _terms = getStore(state);
return _terms;
};

export default connect(mapStateToProps,null)(AllTimeTermsHistory);
