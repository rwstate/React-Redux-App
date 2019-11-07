import React from "react";



const Sockets = props => {
  const sockets = [];
  const links = []

  props.sockets.forEach(el => {
    sockets.push(el.sColour)
  })


  for (let i=0; i < props.sockets.length - 1; i++) {
    if (props.sockets[i].group === props.sockets[i+1].group) {
      links.push(true)
    } else {
      links.push(false)
    }
  }

  const horizontal = "-"

  const vertical = "|"

  const exists = socket => {
    if (socket) {
      return socket
    }
    return "\xa0"
  }

  const addLink = (link, linkType) => {
    if (link) {
      return linkType
    }

    return "\xa0 /"
  }

  const socketLayout = [
    [sockets[0], addLink(links[0], horizontal), exists(sockets[1])],
    ["\xa0", "\xa0", addLink(links[1], vertical)],
    [exists(sockets[3]), addLink(links[2], horizontal), exists(sockets[2])],
    [addLink(links[3], vertical), "\xa0", "\xa0"],
    [exists(sockets[4]), addLink(links[4], horizontal), exists(sockets[5])]
  ]

  return (
    <div>
      {/* {console.log(sockets)} */}
      {socketLayout.map(el => <p>{el.join("\xa0 \xa0")}</p>)}
    </div>
  )
}

export default Sockets;