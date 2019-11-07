import React from "react";
import Item from "./Item";

const Stash = props => {
  return (
    <div>
      <h1>{props.id}</h1>
      <h1>{props.stash.accountName}</h1>
      <h3>{props.stash.league}</h3>
      <h4>"{props.stash.stash}"</h4>
      <div>
        {props.stash.items.map((el, index) => <Item item={el} id={index}/>)}
      </div>
      <p className="stash-divider" />
    </div>
  )
}

export default Stash;