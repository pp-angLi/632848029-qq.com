import React, { useContext } from "react"
import { CountNumber } from "../store/context"

export default function Header() {
  const count = useContext(CountNumber)
  return <div>the count is : {count.state}</div>
}
