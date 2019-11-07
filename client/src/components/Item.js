import React from "react";
import Sockets from "./Sockets"

const Item = props => {
  return (
    <div>
      <hr className="item-divider" />
      <button onClick={() => console.log(props.item)}>Log item data</button>
      <h3>{props.id}</h3>
      <img src={props.item.icon} alt={props.item.name} />

      <p>{props.item.name}</p>
      <p className="item-title">{props.item.typeLine}</p>

      {props.item.properties
        ? props.item.properties.map(el =>
            el.values.length ? <p>{el.name}: {el.values[0][0]}</p> : <p>{el.name}</p>
          )
        : null
      }

      {props.item.implicitMods ? <p className="small-divider"/> : null}

      {props.item.implicitMods
        ? props.item.implicitMods.map(el => <p>{el}</p>)
        : null
      }
      <p className="small-divider" />
      {props.item.explicitMods
        ? props.item.explicitMods.map(el => <p>{el}</p>)
        : null
      }
      {props.item.sockets ? <Sockets sockets={props.item.sockets}/> : null}
    </div>
  );
};

export default Item;
