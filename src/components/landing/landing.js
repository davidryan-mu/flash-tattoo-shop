import React from "react"

import Fade from "../fade/fade"
import FadeUp from "../fade/fadeUp"
import "./landing.scss"

const Landing = () => {
  return (
    <div className="landing_screen">
      <Fade />
      <FadeUp />
    </div>
  )
}

export default Landing
