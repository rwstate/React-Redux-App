import React from "react";
import { connect } from "react-redux";

import { getStashes } from "./actions/actions";

import Stash from "./components/Stash";

import "./App.css";

const App = props => {
  const fetchStash = () => {
    props.getStashes();
  };

  return (
    <div className="App">
      <button onClick={fetchStash}>Update Stashes</button>
      {props.isLoading ? (
        <p>Loading (This may take a few seconds)</p>
      ) : (
        props.stashes.map((el, index) => <Stash stash={el} id={index}/>)
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  stashes: state.stashes.filter(el => el.items.length),
  error: state.error,
  isLoading: state.isFetching
});

export default connect(
  mapStateToProps,
  { getStashes }
)(App);
