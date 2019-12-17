import React from "react";
import { connect } from "react-redux";
import AllHistory from "./AllHistory";
import AddTerm from "./AddTerm";


 const Layout = ({ todo }) => (
  <div className="layoutContainer">
    <div className="navBarContainer">dfsdf</div>
    <div className="mainContainer">
        <div className="sideBarContainer">dfdsf</div>
        <div className="bodyContainer">
            <div className="mainBodySegment"><AddTerm/></div>
            <div className="historySegment"><AllHistory/></div>
        </div>
    </div>
  </div>
);

export default connect(
  null,
)(Layout);
