import React from "react";
import { connect } from "react-redux";
import AllHistory from "./current/AllHistory";
import CurrentTermDetails from "./current/CurrentTermDetails";
import AllTimeTermsHistory from "./history/AllTimeTermsHistory";
import AddTerm from "./current/AddTerm";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

const Layout = () => (
  <Router>
    <div className="layoutContainer">
      <div className="navBarContainer">
        <h2>SpeechDictionary</h2>
      </div>
      <div className="mainContainer">
        <div className="sideBarContainer">
          <div>
            <div>
              <NavLink exact activeClassName="active" className="link" to="/">
                term details
              </NavLink>
            </div>
            <div>
              <NavLink
                exact
                activeClassName="active"
                className="link"
                to="/all"
              >
                all history
              </NavLink>
            </div>
          </div>
        </div>
        <div className="bodyContainer">
          <div className="mainBodySegment">
            <AddTerm />
          </div>
          <Switch>
            <Route exact path="/">
              <div className="currentMapDetailsSegment">
                <CurrentTermDetails />
              </div>
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/all">
              <div className="currentMapDetailsSegment">
                <AllTimeTermsHistory />
              </div>
            </Route>
          </Switch>
          <div className="historySegment">
            <AllHistory />
          </div>
        </div>
      </div>
    </div>
  </Router>
);

export default connect(null)(Layout);
