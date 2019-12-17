import React from "react";
import { connect } from "react-redux";
import Term from "./Term";
import { getTerms } from "../redux/selectors";

 const AllHistory = ({ terms }) => (
  <div className="termsHistory">
    {terms && terms.length
      ? terms.map((term, index) => {
        console.log('=====>>>>>000000>>>>>======',term.content.list[0].definition);
        
          return <Term key={`todo-${term.id}`} term={term.content.list[0].definition} />;
        })
      : "No terms, yay!"}
  </div>
);


const mapStateToProps = state => {
  const terms = getTerms(state); 
  terms.shift();
  console.log('000000',terms);
   
  return { terms };
};
export default connect(mapStateToProps)(AllHistory);