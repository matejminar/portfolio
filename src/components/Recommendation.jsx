import React from "react"
import Img from "gatsby-image"

export const Recommendation = ({ photo, name, position, color, text }) => {
  return (
    <div className="lg:flex lg:items-center bg-white rounded-lg p-6 shadow-lg bg-white md:w-2/5 m-3 overflow-hidden">
      <div className="lg:-ml-12 lg:mr-6 text-center">
        <Img className="rounded-full" fixed={photo} />
      </div>

      <div className="text-center lg:text-left">
        <div className="text-lg mb-2">
          <span className={`text-${color}`}>{name}</span>{" "}
          <span className="text-grey">| {position}</span>
        </div>
        <div className="text-grey">{text}</div>
      </div>
    </div>
  )
}
