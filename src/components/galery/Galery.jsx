import React, { useState } from 'react'
import "./Galery.css"
import BtnSlider from "./BtnSlider"
import dataSlider from "./galeryData"
import tourSlider from "./tourData"


const Galery = ({folder}) => {
  const [slideIndex, setSlideIndex] = useState(1)

  let slider = dataSlider;
  if (folder === "tour") {
    slider = tourSlider;
  }
  const nextSlide = () => {
    if (slideIndex !== slider.length) {
      setSlideIndex(slideIndex + 1)
    }
    else if (slideIndex === slider.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length)
    }
  }

  const moveDot = index => {
    setSlideIndex(index)
  }

  return (

    <div className="container-slider">
      {slider.map((obj, index) => {
        return (

          <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
            <img src={process.env.PUBLIC_URL + `/carousel/${folder}/${index + 1}.png`} />
          </div>
        )
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: slider.length }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Galery
