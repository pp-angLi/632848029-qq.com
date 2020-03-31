import React, { useContext } from "react"
import { CountNumber } from "../store/context"
export default function Main() {
  const mainState = useContext(CountNumber)
  let conutUp = () => {
    mainState.dispatch({
      type: "up"
    })
  }
  let conutDown = () => {
    mainState.dispatch({
      type: "down"
    })
  }
  return (
    <div>
      <Button title="up" func={conutUp} />
      <Button title="down" func={conutDown} />
    </div>
  )
}

function Button(props) {
  return <button onClick={props.func}>{props.title}</button>
}
