import React, { useState } from 'react'
import "./Galery.css"
import BtnSlider from "./BtnSlider"
import dataSlider from "./galeryData"

const Galery = () => {
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1)
    }
    else if (slideIndex === dataSlider.length) {
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
      {dataSlider.map((obj, index) => {
        console.log(process.env.PUBLIC_URL + `/carousel/${index + 1}.png`);
        return (

          <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
            <img src={process.env.PUBLIC_URL + `/carousel/${index + 1}.png`} />
          </div>
        )
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: dataSlider.length }).map((item, index) => (
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
