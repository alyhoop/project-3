import React from "react"
import ReactDOM from "react-dom"
import '../Hello.css'

function Hello() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }

  return (
    <h1 className="hello">Good {timeOfDay}!</h1>
  )
}

ReactDOM.render(<Hello />, document.getElementById("root"))

export default Hello;
