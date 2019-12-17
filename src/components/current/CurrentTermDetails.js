import React from "react";
import { connect } from "react-redux";
import TermDetails from "./TermDetails";
import { getStore } from "../../redux/selectors";

const CurrentTermDetails = terms => {
  const allTerms = terms.content?terms.content.list:[];
  return (
    <div className="termsCurrent">
      {allTerms && allTerms.length
        ? allTerms.map((term, index) => {
            return <TermDetails key={index} term={term} />;
          })
        : ""}
    </div>
  );
};

const mapStateToProps = state => {
  const _terms = getStore(state)
  const allTerms = _terms.terms
  const currentId= _terms.currentId
  const currentTerm = allTerms.filter((term)=>{
    return term.id == currentId
  })
  return currentTerm[0]? currentTerm[0]:{};
};

export default connect(mapStateToProps,null)(CurrentTermDetails);
