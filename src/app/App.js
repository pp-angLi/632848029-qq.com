import React, { useReducer } from "react"
import "./App.css"
import Header from "../header/Header"
import Main from "../main/Main"
import { CountNumber } from "../store/context"
import { reducer } from "../store/store"

export default function App() {
  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <CountNumber.Provider value={{ state, dispatch }}>
      <Header />
      <Main />
    </CountNumber.Provider>
  )
}
