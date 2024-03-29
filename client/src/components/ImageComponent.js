import React from 'react'
import spaceXlogo from "../Assets/spaceX.jpg"

export default function ImageComponent() {
  return (
    <img src={spaceXlogo} style={{ width: "300px", marginTop: "-100px" }}></img>
  )
}
