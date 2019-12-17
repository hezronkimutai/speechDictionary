import React from "react";
import { connect } from "react-redux";
import Term from "./Term";
import { getStore } from "../../redux/selectors";

const AllHistory = terms => {
  const allTerms = terms.terms;
  return (
    <div className="termsHistory">
      {allTerms && allTerms.length
        ? allTerms.map((term, index) => {
            return <Term key={index} term={term} />;
          })
        : ""}
    </div>
  );
};

const mapStateToProps = state => {
    const _terms = getStore(state);
  return _terms;
};

export default connect(mapStateToProps)(AllHistory);
