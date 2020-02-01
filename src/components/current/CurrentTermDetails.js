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
  
  const allTerms = state.terms
  const currentId= allTerms.currentId
  const currentTerm = allTerms.terms.filter((term)=>{
    console.log(term.id,currentId);
    
    return term.id === currentId
  })

  return currentTerm[0]? currentTerm[0]:{};
};

export default connect(mapStateToProps,null)(CurrentTermDetails);
